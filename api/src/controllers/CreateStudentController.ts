import { Request, Response } from "express";

import { CreateStudentCase } from "../useCases/CreateStudentCase";

export class CreateStudentController {
  async handle(request: Request, response: Response) {
    const { nome, email, password } = request.body;

    const createStudentCase = new CreateStudentCase();

    const aluno = await createStudentCase.execute({
      nome,
      email,
      password,
    });

    return response.json(aluno);
  }
}
