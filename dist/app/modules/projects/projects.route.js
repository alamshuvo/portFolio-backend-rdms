"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const client_1 = require("@prisma/client");
const projects_controller_1 = require("./projects.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const project_validation_1 = require("./project.validation");
const router = express_1.default.Router();
router.get("/", projects_controller_1.projectController.getAllProjects);
router.get("/:id", projects_controller_1.projectController.getSingleProject);
router.post("/", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(project_validation_1.projectValidationSchema.projectValidation), projects_controller_1.projectController.insertIntoDb);
router.delete("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), projects_controller_1.projectController.deleteProject);
router.patch("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(project_validation_1.projectValidationSchema.updateProjectValidation), projects_controller_1.projectController.updateProject);
exports.projectsRoutes = router;
