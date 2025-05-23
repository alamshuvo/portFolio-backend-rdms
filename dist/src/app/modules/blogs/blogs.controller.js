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
exports.blogsController = void 0;
const catchAsync_1 = __importDefault(require("../../../helpers/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_helpers_1 = __importDefault(require("../../../helpers/sendResponse.helpers"));
const blogs_service_1 = require("./blogs.service");
const insertIntoDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = req.body;
    const result = yield blogs_service_1.blogsService.insertIntoDb(data, user);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blogs Created  successfully",
        data: result,
    });
}));
const getAllBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_service_1.blogsService.getAllblogs();
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All Blogs retrived successfully",
        data: result,
    });
}));
const getSingleBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blogs_service_1.blogsService.getSingleblogs(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Blogs retrived successfully",
        data: result,
    });
}));
const deleteblogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blogs_service_1.blogsService.deleteBlogs(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single blogs delete successfully",
        data: result,
    });
}));
const updateBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield blogs_service_1.blogsService.updateBlogs(id, data);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single blogs  update  successfully",
        data: result,
    });
}));
exports.blogsController = {
    insertIntoDb,
    getAllBlogs,
    getSingleBlogs,
    deleteblogs,
    updateBlogs
};
