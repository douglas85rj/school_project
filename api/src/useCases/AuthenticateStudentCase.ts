import { prismaClient } from "../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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
      "6b2c48ed-c5f9-4802-bf1f-221edcc4350a",
      {
      }
       
    );

    return token;
  }
}

export { AuthenticateStudentCase };


