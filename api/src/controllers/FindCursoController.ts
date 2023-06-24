import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

export class FindCursoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const prisma = new PrismaClient();

        const curso = await prisma.curso.findFirst({
            where: {
                id: Number(id),
            },
            include: {
                inscricao: {
                    include: {
                        aluno: true,
                    },
                },
            },
        });

        return response.json(curso);

    }
}

