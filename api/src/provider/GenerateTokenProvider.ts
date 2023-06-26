
import { sign } from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET;

class GenerateTokenProvider {
  async execute(alunoId: string) {
    const token = sign({}, 'JWT_SECRET', {
      subject: alunoId,
      expiresIn: "600s",
    });

    return token;
  }
}

export { GenerateTokenProvider };