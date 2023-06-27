import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindStudentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;



    const aluno = await prismaClient.aluno.findFirst({
      where: {
       
        id: String(id),


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
