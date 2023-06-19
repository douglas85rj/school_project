import { Router } from "express";

 import { CreateAlunoController } from "./controllers/CreateAlunoController";
 import { CreateCursoController } from "./controllers/CreateCursoController";
 import { CreateInscricaoController } from "./controllers/CreateInscricaoController";
 import { FindAlunoController } from "./controllers/FindAlunoController";
 import { FindCursoController } from "./controllers/FindCursoController"; 
 import { LisAlunosController } from "./controllers/ListAlunosController";
 import { ListCursosController } from "./controllers/ListCursosController";
//
 const router = Router();

 const createAlunoController = new CreateAlunoController();
 const createCursoController = new CreateCursoController();
 const createInscricaoController = new CreateInscricaoController();
 const findAlunoController = new FindAlunoController();
 const findCursoController = new FindCursoController();
 const listAlunosController = new LisAlunosController();
 const listCursosController = new ListCursosController();

 router.post("/aluno", createAlunoController.handle); // (working) Cadastrar aluno
 router.post("/curso", createCursoController.handle); //(working) Cadastrar curso
 router.post("/inscricao", createInscricaoController.handle);//(working) Cadastrar inscrição Aluno/curso
 router.get("/aluno/:id", findAlunoController.handle); //(working) Buscar aluno por id
 router.get("/curso/:id", findCursoController.handle);//(working) Listar curso por id
 router.get("/alunos", listAlunosController.handle);//(working) Listar todos os alunos
 router.get("/cursos", listCursosController.handle);//(working) Listar todos os cursos


export { router };









