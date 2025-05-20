import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middleware/authMiddleware';
import { MetaController } from './meta.controller';


const route = express.Router();

route.get("/",auth(UserRole.ADMIN),MetaController.fetchDashboardMetaData)
export const MetaRoutes = route