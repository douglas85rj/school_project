import { prismaClient } from "../database/prismaClient";
import { GenerateTokenProvider } from "../provider/GeneratetokenProvider";

class RefreshTokenStudent {
  async execute(refreshToken: string) {
    const refreshTokenStudent = await prismaClient.refreshToken.findFirst({
      where: {
        id: refreshToken,
      },     
    });
    if (!refreshTokenStudent) {
      throw new Error("Refresh Token invalid");
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(
      refreshTokenStudent.alunoId
    );

    return { token };
  }
}

export { RefreshTokenStudent };
