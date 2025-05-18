import express from 'express';
import auth from '../../middleware/authMiddleware';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middleware/validateRequest';
import { experienceValidationSchema } from './experience.validation';
import { experienceController } from './experience.controller';
const router = express.Router();

router.get("/",experienceController.getAllExperience)
router.get("/:id",experienceController.getSingleExperience)
router.post("/",auth(UserRole.ADMIN),validateRequest(experienceValidationSchema.experienceValidation),experienceController.insertIntoDb)

router.delete("/:id",auth(UserRole.ADMIN),experienceController.deleteExperience)
router.patch("/:id",auth(UserRole.ADMIN),validateRequest(experienceValidationSchema.updateexperienceValidation),experienceController.updateExperience)
export const experienceRoutes = router