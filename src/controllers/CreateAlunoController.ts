import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


export class CreateAlunoController {
    async handle(request: Request, response: Response) {
        const { nome, email, password} = request.body;
    
        const prisma = new PrismaClient();
    
        const aluno = await prisma.aluno.create({
        data: {
            nome,
            email,
            password,
        },
        });
    
        return response.json(aluno);
    }
    }