import express from 'express';
import auth from '../../middleware/authMiddleware';
import { UserRole } from '@prisma/client';
const router = express.Router()

// router.post("/",auth(UserRole.ADMIN),projectController.insertIntoDb)
export const projectsRoutes = router