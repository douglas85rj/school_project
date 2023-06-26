import { Request,Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCourseController {
    async handle(request: Request, response: Response) {
        const { nome} = request.body;
        const {descricao} = request.body;
    
    
        const curso = await prismaClient.curso.create({
        data: {
            nome,
            descricao,
        },
        });
    
        return response.json(curso);
    }
    }