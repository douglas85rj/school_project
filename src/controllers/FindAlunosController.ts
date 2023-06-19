import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class FindAlunosController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const prisma = new PrismaClient();

    const alunos = await prisma.aluno.findMany({
      where: {
        id: Number(id),
      },
      include: {
        inscricao: {
          include: {
            curso: true,
          },
        },
      },
    });

    return response.json(alunos);
  }
}


// export class ListAlunosController {
//     async handle(request: Request, response: Response) {
//         const {id} = request.params;

//         const prisma = new PrismaClient();

//         const alunos = await prisma.aluno.findMany({
//             where: {
//                 id: Number(id),
//             },
//             // include: {
//             //     inscricao: {
//             //         include: {
//             //             curso: true,
//             //         },
//             //     },
//             // },
//              });


//         return response.json(alunos);
//     }
// }

