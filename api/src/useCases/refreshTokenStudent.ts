import { prismaClient } from "../database/prismaClient";
import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import { GenerateRefreshToken } from "../provider/GenerateRefreshToken";
import dayjs from "dayjs";

class RefreshTokenStudent {
  async execute(refresh_token: string) {
    const refreshToken = await prismaClient.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });
    if (!refreshToken) {
      throw new Error("Refresh Token invalid");
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    );

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(refreshToken.alunoId);

    if (refreshTokenExpired) {
      await prismaClient.refreshToken.deleteMany({
        where: {
          alunoId: refreshToken.alunoId,
        },
      });

      const generateRefreshTokenProvider = new GenerateRefreshToken();
      const newRefreshToken = await generateRefreshTokenProvider.execute(
        refreshToken.alunoId
      );
      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}

export { RefreshTokenStudent };


//  