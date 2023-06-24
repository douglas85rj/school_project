import { Request, Response } from "express";

import { CreateAlunoCase } from "../useCases/CreateAlunoCase";

export class CreateAlunoController {
  async handle(request: Request, response: Response) {
    const { nome, email, password } = request.body;

    const createAlunoCase = new CreateAlunoCase();

    const aluno = await createAlunoCase.execute({
      nome,
      email,
      password,
    });

    return response.json(aluno);
  }
}
