import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class CreateInscricaoController {
    async handle(request: Request, response: Response) {
        const { id_aluno, id_curso } = request.body;
    
        const prisma = new PrismaClient();
    
        const inscricaoCurso = await prisma.inscricao.create({
        data: {
            aluno: {
            connect: { id: id_aluno },
            },
            curso: {
            connect: { id: id_curso },
            },
        },
        });
    
        return response.json(inscricaoCurso);
    }
    }