import { Router } from "express";

import { CreateAlunoController } from "./controllers/CreateAlunoController";
import { CreateCursoController } from "./controllers/CreateCursoController";
import { CreateInscricaoController } from "./controllers/CreateInscricaoController";
import { FindAlunoController } from "./controllers/FindAlunoController";
import { FindAlunoCursoController } from "./controllers/FindAlunoCursoController";

const router = Router();

const createAlunoController = new CreateAlunoController();
const createCursoController = new CreateCursoController();
const createInscricaoController = new CreateInscricaoController();
const findAlunoController = new FindAlunoController();
const findAlunoCursoController = new FindAlunoCursoController();

router.post("/aluno", createAlunoController.handle);
router.post("/curso", createCursoController.handle);
router.post("/inscricao", createInscricaoController.handle);
router.get("/aluno/:id", findAlunoController.handle);
router.get("/aluno/:id/curso", findAlunoCursoController.handle);


export { router };









