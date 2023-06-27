import { Request,Response } from "express";

import { prismaClient } from "../database/prismaClient";
import { count } from "console";

export class ListCoursesController {

    async handle(request: Request, response: Response) {            
  
            const { id } = request.params;
    
            const cursos = await prismaClient.curso.groupBy({
                by: ['id', 'nome'],
                _count: {
                    _all: true,
                },
                where: {
                    id: String(id),
                },
            });
    
            return response.json(cursos);
        }

}