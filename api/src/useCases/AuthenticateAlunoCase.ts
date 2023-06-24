import { prismaClient } from "../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateAlunoRequest {
    email: string;
    password: string;
}



class AuthenticateAlunoCase {
    async execute({ email, password }: IAuthenticateAlunoRequest) {
        const studentAlreadyExists = await prismaClient.aluno.findFirst({
            where: {
                email
            }
        });

        const aluno = await prismaClient.aluno.findFirst({
            where: {
                email
            }
        });

        if (!studentAlreadyExists) {
            throw new Error('Email/Password incorrect');
        }

        const passwordMatch = await compare(password, studentAlreadyExists.password);

        if (!passwordMatch) {
            throw new Error('Email/Password incorrect');
        }

const token = sign(
            {
                            
            },
            process.env.JWT_SECRET,
            {
                subject: studentAlreadyExists.id,
                expiresIn: "10000s"
            }
        );

        return { aluno, token };
    }
}

export { AuthenticateAlunoCase };


