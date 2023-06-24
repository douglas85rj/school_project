import { hash  } from "bcryptjs";
import { prismaClient } from "../database/prismaClient";


interface IUserRequest {
    nome: string;
    email: string;
    password: string;
}

class CreateUserUseCase {
    async execute({ nome, email, password }: IUserRequest) {
        

        const userAlreadyExists = await prismaClient.aluno.findFirst({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const aluno = await prismaClient.aluno.create({
            data: {
                nome,
                email,
                password: passwordHash
            }
        });

        return aluno;
    }
}

export { CreateUserUseCase };
