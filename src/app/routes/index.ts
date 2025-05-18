import express from "express";
import { AdminRoutes } from "../modules/admin/admin.routes";
import { projectsRoutes } from "../modules/projects/projects.route";
import { authRoutes } from "../modules/auth/auth.route";
import { blogsRoutes } from "../modules/blogs/blogs.routes";
import { courseRoutes } from "../modules/course/course.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/projects",
    route: projectsRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/blogs",
    route: blogsRoutes,
  },
  {
    path:"/course",
    route:courseRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
