import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class FindAlunoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const prisma = new PrismaClient();

    const aluno = await prisma.aluno.findFirst({
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

    return response.json(aluno);
  }
}
