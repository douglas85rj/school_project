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


 router.post("/aluno", createAlunoController.handle); 
 router.post("/curso", createCursoController.handle); 
 router.post("/inscricao", createInscricaoController.handle);
 router.get("/aluno/:id", findAlunoController.handle); 
 router.get("/curso/:id", findCursoController.handle);
 router.get("/alunos", listAlunosController.handle);
 router.get("/cursos", listCursosController.handle);


export { router };









