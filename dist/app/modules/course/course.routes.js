"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const course_controller_1 = require("./course.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const course_validation_1 = require("./course.validation");
const router = express_1.default.Router();
router.get("/", course_controller_1.courseController.getAllCourse);
router.get("/:id", course_controller_1.courseController.getSingleCourse);
router.post("/", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(course_validation_1.courseValidationSchema.courseValidation), course_controller_1.courseController.insertIntoDb);
router.delete("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), course_controller_1.courseController.deleteCourse);
router.patch("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(course_validation_1.courseValidationSchema.updateCourseValidation), course_controller_1.courseController.updateCourse);
exports.courseRoutes = router;
