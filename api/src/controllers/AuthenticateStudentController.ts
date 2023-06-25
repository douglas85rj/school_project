import { Request, Response } from "express";
import { AuthenticateStudentCase } from "../useCases/AuthenticateStudentCase";


class AuthenticateStudentController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateStudentCase = new AuthenticateStudentCase();

    const token = await authenticateStudentCase.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateStudentController };