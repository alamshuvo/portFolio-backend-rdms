import { UserRole } from '@prisma/client';
import express from 'express'
import auth from '../../middleware/authMiddleware';
import { courseController } from './course.controller';
import validateRequest from '../../middleware/validateRequest';
import { courseValidationSchema } from './course.validation';

const router = express.Router();
router.get("/",courseController.getAllCourse)
router.get("/:id",courseController.getSingleCourse)
router.post("/",auth(UserRole.ADMIN),validateRequest(courseValidationSchema.courseValidation),courseController.insertIntoDb)

router.delete("/:id",auth(UserRole.ADMIN),courseController.deleteCourse)
router.patch("/:id",auth(UserRole.ADMIN),validateRequest(courseValidationSchema.updateCourseValidation),courseController.updateCourse)

export const courseRoutes = router