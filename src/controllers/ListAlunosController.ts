import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

export class LisAlunosController {

    async handle(request: Request, response: Response) {
            
            const prisma = new PrismaClient();
    
            const alunos = await prisma.aluno.findMany({
                include: {
                    inscricao: {
                        include: {
                            curso: true,
                        },
                    },
                },
            });
    
            return response.json(alunos);
        }

}