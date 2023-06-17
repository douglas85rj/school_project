import { Router } from "express";

import { CreateAlunoController } from "./src/controllers/CreateAlunoController";
import { CreateCursoController } from "./src/controllers/CreateCursoController";
import { CreateInscricaoController } from "./src/controllers/CreateInscricaoController";
import { FindAlunoController } from "./src/controllers/FindAlunoController";
import { FindAlunoCursoController } from "./src/controllers/FindAlunoCursoController";

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









