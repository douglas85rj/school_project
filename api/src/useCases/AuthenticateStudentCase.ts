import { prismaClient } from "../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { GenerateRefreshToken } from "../provider/GeneraterefreshToken";

const JWT_SECRET = process.env.JWT_SECRET;
//console.log(process.env.JWT_SECRET);

interface IAuthenticateAlunoRequest {
  email: string;
  password: string;
}

class AuthenticateStudentCase {
  async execute({ email, password }: IAuthenticateAlunoRequest) {
    const studentAlreadyExists = await prismaClient.aluno.findFirst({
      where: {
        email,
      },
    });

    if (!studentAlreadyExists) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(
      password,
      studentAlreadyExists.password
    );

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: studentAlreadyExists.email,
      },
      "JWT_SECRET",
      {
        expiresIn: "20s",
      }
    );

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(studentAlreadyExists.id);


    return {token, refreshToken};
  }
}

export { AuthenticateStudentCase };
