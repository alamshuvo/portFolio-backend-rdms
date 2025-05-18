import express from "express";
import { AdminRoutes } from "../modules/admin/admin.routes";
import { projectsRoutes } from "../modules/projects/projects.route";
import { authRoutes } from "../modules/auth/auth.route";
import { blogsRoutes } from "../modules/blogs/blogs.routes";
import { courseRoutes } from "../modules/course/course.routes";
import { experienceRoutes } from "../modules/experience /experience.routes";
import { skillsRoutes } from "../modules/skills/skills.routes";
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
  },
  {
    path:"/experience",
    route:experienceRoutes
  },
  {
    path:"/skills",
    route:skillsRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
