"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const catchAsync_1 = __importDefault(require("../../../helpers/catchAsync"));
const sendResponse_helpers_1 = __importDefault(require("../../../helpers/sendResponse.helpers"));
const http_status_1 = __importDefault(require("http-status"));
const project_service_1 = require("./project.service");
const insertIntoDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = req.body;
    const result = yield project_service_1.projectService.insertIntoDb(data, user);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Projects Created  successfully",
        data: result,
    });
}));
const getAllProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.projectService.getAllProjects();
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All Projects retrived successfully",
        data: result,
    });
}));
const getSingleProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield project_service_1.projectService.getSingleProject(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Projects retrived successfully",
        data: result,
    });
}));
const deleteProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield project_service_1.projectService.deleteSingleProject(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Projects delete successfully",
        data: result,
    });
}));
const updateProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield project_service_1.projectService.updateSingleProject(id, data);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Projects update  successfully",
        data: result,
    });
}));
exports.projectController = {
    insertIntoDb,
    getAllProjects,
    getSingleProject,
    deleteProject,
    updateProject
};
