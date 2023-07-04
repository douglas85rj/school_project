import { Request, Response } from "express";
import { prismaClient } from "src/database/prismaClient";

export class CancelEnrollmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;

        const inscricaoJaExiste = await prismaClient.inscricao.findFirst({
            where: {
                id: id,
            },
        });

        if (!inscricaoJaExiste) {
            return response.status(400).json({ error: "Inscrição não existe" });
        }



        const inscricaoCancel = await prismaClient.inscricao.update({
         
            where:{
                id:id,                         

                },
            data:{
                inscrito : false,
                dataCancelamento: new Date(),
            }

        });
        return response.json(inscricaoCancel);
    }
}

