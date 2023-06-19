import { Request,Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCursoController {
    async handle(request: Request, response: Response) {
        const { nome} = request.body;
    
    
        const curso = await prismaClient.curso.create({
        data: {
            nome,
            
        },
        });
    
        return response.json(curso);
    }
    }