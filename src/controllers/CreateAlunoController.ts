import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export class CreateAlunoController {
    async handle(request: Request, response: Response) {
        const { nome, email, password} = request.body;
    
    
        const aluno = await prismaClient.aluno.create({
        data: {
            nome,
            email,
            password,
        },
        });
    
        return response.json(aluno);
    }
    }