"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const skills_validation_1 = require("./skills.validation");
const skills_controller_1 = require("./skills.controller");
const router = express_1.default.Router();
router.get("/", skills_controller_1.skillsController.getAllSkills);
router.get("/:id", skills_controller_1.skillsController.getSingleSkills);
router.post("/", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(skills_validation_1.skillValidationSchema.skillValidation), skills_controller_1.skillsController.insertIntoDb);
router.delete("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), skills_controller_1.skillsController.deleteSkills);
router.patch("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(skills_validation_1.skillValidationSchema.updateSkillValidation), skills_controller_1.skillsController.updateSkills);
exports.skillsRoutes = router;
