import { RefreshTokenStudent } from "@useCases/refreshTokenStudent";
import { Request, Response } from "express";


class RefreshTokenStudentController {
  async handle(request: Request, response: Response) {
    const { refresh_token } = request.body;

    const refreshTokenSudent = new RefreshTokenStudent();

    const token = await refreshTokenSudent.execute(refresh_token);

    return response.json(token);
  }
}

export { RefreshTokenStudentController };

