import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateInscricaoController {
  async handle(request: Request, response: Response) {
    const { alunoId, cursoId } = request.body;

    const inscricao = await prismaClient.inscricao.create({
      data: {
        alunoId,
        cursoId,
        inscrito : true,       
      },
      aluno: {
        connect: {
          id: alunoId,
        },
      },
      curso: {
        connect: {
          id: cursoId,
        },
      },
    });

    return response.json(inscricao);
  }
}
