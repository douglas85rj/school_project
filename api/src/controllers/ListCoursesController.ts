import { Request,Response } from "express";

import { prismaClient } from "../database/prismaClient";


export class ListCoursesController {

    async handle(request: Request, response: Response) {            
  
            const { id } = request.params;
    
            const cursos = await prismaClient.curso.findMany({

              include: {
                _count: {
                    select: {
                        inscricao: true
                    }
                }
            },
            });
                
            
    
            return response.json(cursos);
        }

}