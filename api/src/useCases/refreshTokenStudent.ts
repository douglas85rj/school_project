import { prismaClient } from "../database/prismaClient";
import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import dayjs from "dayjs";

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

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshTokenStudent.expiresIn)
    );

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(
      refreshTokenStudent.alunoId
    );

    if (refreshTokenExpired) {
      await prismaClient.refreshToken.deleteMany({
        where: {
          alunoId: refreshTokenStudent.alunoId,
        },
      });

      const generateRefreshToken = new GenerateTokenProvider();
      const newRefreshToken = await generateRefreshToken.execute(
        refreshTokenStudent.alunoId
      );
        return { token, refreshToken: newRefreshToken };
      //throw new Error("Refresh Token expired");
    }
   

    return { token };
  }
}

export { RefreshTokenStudent };
