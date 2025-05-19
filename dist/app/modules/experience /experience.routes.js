"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const experience_validation_1 = require("./experience.validation");
const experience_controller_1 = require("./experience.controller");
const router = express_1.default.Router();
router.get("/", experience_controller_1.experienceController.getAllExperience);
router.get("/:id", experience_controller_1.experienceController.getSingleExperience);
router.post("/", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(experience_validation_1.experienceValidationSchema.experienceValidation), experience_controller_1.experienceController.insertIntoDb);
router.delete("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), experience_controller_1.experienceController.deleteExperience);
router.patch("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(experience_validation_1.experienceValidationSchema.updateexperienceValidation), experience_controller_1.experienceController.updateExperience);
exports.experienceRoutes = router;
