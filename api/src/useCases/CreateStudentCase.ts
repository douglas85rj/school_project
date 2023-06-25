import { hash  } from "bcryptjs";
import { prismaClient } from "../database/prismaClient";


interface IAlunoRequest {
    nome: string;
    email: string;
    password: string;
}

class CreateStudentCase {
    async execute({ nome, email, password }: IAlunoRequest) {
        

        const studentAlreadyExists = await prismaClient.aluno.findFirst({
            where: {
                email
            }
        });

        if (studentAlreadyExists) {
            throw new Error("Student already exists");
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

export { CreateStudentCase };
