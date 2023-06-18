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
       
    });


    return response.json(inscricao);
  }
}
