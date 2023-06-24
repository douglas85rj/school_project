import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const aluno = await createUserUseCase.execute({ nome, email, password });

    return response.json(aluno);
  }
}

export { CreateUserController };
