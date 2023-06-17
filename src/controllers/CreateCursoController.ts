import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

export class CreateCursoController {
    async handle(request: Request, response: Response) {
        const { nome} = request.body;
    
        const prisma = new PrismaClient();
    
        const curso = await prisma.curso.create({
        data: {
            nome,
            
        },
        });
    
        return response.json(curso);
    }
    }