import { prismaClient } from "../database/prismaClient";
import dayjs from "dayjs";



class GenerateRefreshToken {
    async execute(alunoId: string) {
    
    const expiresIn = dayjs().add(400, "second").unix();
    const generateRefreshToken = await prismaClient.refreshToken.create({
        data: {
            alunoId,
            expiresIn,
        },
        });
        return generateRefreshToken;

    }
}

export { GenerateRefreshToken };



