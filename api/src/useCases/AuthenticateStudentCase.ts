import { prismaClient } from "../database/prismaClient";
import { compare } from "bcryptjs";
import { GenerateTokenProvider } from "@provider/GenerateTokenProvider";
import { GenerateRefreshToken } from "@provider/GenerateRefreshToken";

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

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(studentAlreadyExists.id);

    await prismaClient.refreshToken.deleteMany({
      where: {
        alunoId: studentAlreadyExists.id,
      },
    });

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(
      studentAlreadyExists.id
    );

    return { token, refreshToken };
  }
}

export { AuthenticateStudentCase };
