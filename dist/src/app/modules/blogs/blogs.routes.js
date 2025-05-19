"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const blogs_controller_1 = require("./blogs.controller");
const blogs_validation_1 = require("./blogs.validation");
const router = express_1.default.Router();
router.get("/", blogs_controller_1.blogsController.getAllBlogs);
router.get("/:id", blogs_controller_1.blogsController.getSingleBlogs);
router.post("/", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(blogs_validation_1.blogsValidationSchema.blogValidation), blogs_controller_1.blogsController.insertIntoDb);
router.delete("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), blogs_controller_1.blogsController.deleteblogs);
router.patch("/:id", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(blogs_validation_1.blogsValidationSchema.updateblogValidation), blogs_controller_1.blogsController.updateBlogs);
exports.blogsRoutes = router;
