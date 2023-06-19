import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

export class ListCursosController {

    async handle(request: Request, response: Response) {
            
            const prisma = new PrismaClient();
            const { id } = request.params;
    
            const cursos = await prisma.curso.findMany({
                include: {
                    inscricao: {
                        include: {
                            aluno: true,
                        },
                    },
                },
                

            });
    
            return response.json(cursos);
        }

}