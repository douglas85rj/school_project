import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateEnrollmentController {
  async handle(request: Request, response: Response) {
    const { alunoId, cursoId } = request.body;

    const aluno = await prismaClient.aluno.findUnique({
      where: {
        id: alunoId,
      },
    });

    if (!aluno) {
      return response.status(400).json({ error: "Aluno não existe" });
    }

    const curso = await prismaClient.curso.findUnique({
      where: {
        id: cursoId,
      },
    });

    if (!curso) {
      return response.status(400).json({ error: "Curso não existe" });
    }

    const inscricaoJaExiste = await prismaClient.inscricao.findFirst({
      where: {
        alunoId,
        cursoId,
      },
    });

    if (inscricaoJaExiste) {
      return response.status(400).json({ error: "Inscrição já existe" });
    }

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
