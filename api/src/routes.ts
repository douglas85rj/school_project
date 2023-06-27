import { Router } from "express";

import { CreateStudentController } from "@controllers/CreateStudentController";
import { CreateCourseController } from "@controllers/CreateCourseController";
import { CreateEnrollmentController } from "@controllers/CreateEnrollmentController";
import { FindStudentController } from "@controllers/FindStudentController";
import { FindCourseController } from "@controllers/FindCourseController";
import { ListStudentsController } from "@controllers/ListStudentsController";
import { ListCoursesController } from "@controllers/ListCoursesController";
import { AuthenticateStudentController } from "@controllers/AuthenticateStudentController";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";
import { RefreshTokenStudentController } from "@controllers/RefreshTokenStudentController";

//
const router = Router();

const createStudentController = new CreateStudentController();
const createCourseController = new CreateCourseController();
const createEnrollmentController = new CreateEnrollmentController();
const findStudentController = new FindStudentController();
const findCourseController = new FindCourseController();
const listStudentsController = new ListStudentsController();
const listCoursesController = new ListCoursesController();
const authenticateStudentController = new AuthenticateStudentController();
const refreshTokenStudentController = new RefreshTokenStudentController();

router.post("/aluno", createStudentController.handle);
router.post("/curso", createCourseController.handle);
router.post("/inscricao", createEnrollmentController.handle);
router.get("/aluno/:id", findStudentController.handle);
router.get("/curso/:id", findCourseController.handle);
router.get("/alunos", listStudentsController.handle);
router.get("/cursos", ensureAuthenticated,listCoursesController.handle);
router.post("/login", authenticateStudentController.handle);
router.post("/refresh-token", refreshTokenStudentController.handle);

export { router };
