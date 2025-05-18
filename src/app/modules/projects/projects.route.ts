import express from 'express';
import auth from '../../middleware/authMiddleware';
import { UserRole } from '@prisma/client';
import { projectController } from './projects.controller';
import validateRequest from '../../middleware/validateRequest';
import { projectValidationSchema } from './project.validation';
const router = express.Router()

router.post("/",auth(UserRole.ADMIN),validateRequest(projectValidationSchema.projectValidation),projectController.insertIntoDb)
export const projectsRoutes = router