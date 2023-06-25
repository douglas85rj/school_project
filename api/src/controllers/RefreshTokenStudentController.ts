import { RefreshTokenStudent } from "../useCases/RefreshTokenStudent";
import { Request, Response } from "express";


class RefreshTokenStudentController {
  async handle(request: Request, response: Response) {
    const { refreshToken } = request.body;

    const refreshTokenStudent = new RefreshTokenStudent();

    const token = await refreshTokenStudent.execute(refreshToken);

    return response.json(token);
  }
}

export { RefreshTokenStudentController };

