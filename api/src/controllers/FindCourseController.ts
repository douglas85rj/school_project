import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

export class FindCourseController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const prisma = new PrismaClient();

        const curso = await prisma.curso.findFirst({
            where: {
                id: String(id),
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

