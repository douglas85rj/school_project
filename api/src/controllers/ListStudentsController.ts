import { Request,Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ListStudentsController {

    async handle(request: Request, response: Response) {
            
         
    
            const alunos = await prismaClient.aluno.findMany({
                include: {
                    inscricao: {
                        include: {
                            curso: false,
                        },
                    },
                },
            });
    
            return response.json(alunos);
        }

}