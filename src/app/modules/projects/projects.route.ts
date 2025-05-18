import express from 'express';
import auth from '../../middleware/authMiddleware';
import { UserRole } from '@prisma/client';
import { projectController } from './projects.controller';
import validateRequest from '../../middleware/validateRequest';
import { projectValidationSchema } from './project.validation';
const router = express.Router()
router.get("/",projectController.getAllProjects)
router.get("/:id",projectController.getSingleProject)
router.post("/",auth(UserRole.ADMIN),validateRequest(projectValidationSchema.projectValidation),projectController.insertIntoDb)
export const projectsRoutes = router