import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

export class FindAlunoCursoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const prisma = new PrismaClient();

        const curso = await prisma.aluno.findFirst({
            where: {
                id: Number(id),
            },
            include: {
                inscricao: {
                    include: {
                        curso: true,
                    },
                },
            },
        });

        return response.json(curso);

    }
}

