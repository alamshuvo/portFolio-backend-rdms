"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_routes_1 = require("../modules/admin/admin.routes");
const projects_route_1 = require("../modules/projects/projects.route");
const auth_route_1 = require("../modules/auth/auth.route");
const blogs_routes_1 = require("../modules/blogs/blogs.routes");
const course_routes_1 = require("../modules/course/course.routes");
const experience_routes_1 = require("../modules/experience /experience.routes");
const skills_routes_1 = require("../modules/skills/skills.routes");
const meta_routes_1 = require("../modules/meta/meta.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/admin",
        route: admin_routes_1.AdminRoutes,
    },
    {
        path: "/projects",
        route: projects_route_1.projectsRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.authRoutes,
    },
    {
        path: "/blogs",
        route: blogs_routes_1.blogsRoutes,
    },
    {
        path: "/course",
        route: course_routes_1.courseRoutes,
    },
    {
        path: "/experience",
        route: experience_routes_1.experienceRoutes,
    },
    {
        path: "/skills",
        route: skills_routes_1.skillsRoutes,
    },
    {
        path: "/meta",
        route: meta_routes_1.MetaRoutes
    }
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
