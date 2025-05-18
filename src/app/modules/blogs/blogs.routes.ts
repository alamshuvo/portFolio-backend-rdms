import express from 'express';
import auth from '../../middleware/authMiddleware';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middleware/validateRequest';
import { blogsController } from './blogs.controller';
import { blogsValidationSchema } from './blogs.validation';
const router = express.Router();
router.get("/",blogsController.getAllBlogs)
router.get("/:id",blogsController.getSingleBlogs)
router.post("/",auth(UserRole.ADMIN),validateRequest(blogsValidationSchema.blogValidation),blogsController.insertIntoDb)

export const blogsRoutes = router;
