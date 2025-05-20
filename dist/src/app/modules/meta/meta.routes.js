"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const meta_controller_1 = require("./meta.controller");
const route = express_1.default.Router();
route.get("/", (0, authMiddleware_1.default)(client_1.UserRole.ADMIN), meta_controller_1.MetaController.fetchDashboardMetaData);
exports.MetaRoutes = route;
