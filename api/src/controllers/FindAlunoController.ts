import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindAlunoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;



    const aluno = await prismaClient.aluno.findFirst({
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
