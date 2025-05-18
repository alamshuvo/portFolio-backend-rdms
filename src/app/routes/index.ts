import express from "express";
import { AdminRoutes } from "../modules/admin/admin.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/admin",
    route: AdminRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
