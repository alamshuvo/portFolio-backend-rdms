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
exports.courseController = void 0;
const catchAsync_1 = __importDefault(require("../../../helpers/catchAsync"));
const sendResponse_helpers_1 = __importDefault(require("../../../helpers/sendResponse.helpers"));
const http_status_1 = __importDefault(require("http-status"));
const course_service_1 = require("./course.service");
const insertIntoDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = req.body;
    const result = yield course_service_1.courseService.insertIntoDb(data, user);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "course Created  successfully",
        data: result,
    });
}));
const getAllCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_service_1.courseService.getAllCourse();
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All Course retrived successfully",
        data: result,
    });
}));
const getSingleCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield course_service_1.courseService.getSinglecourse(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Course retrived successfully",
        data: result,
    });
}));
const deleteCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield course_service_1.courseService.deleteSingleCourse(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Course delete successfully",
        data: result,
    });
}));
const updateCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield course_service_1.courseService.updateSingleCourse(id, data);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Course update  successfully",
        data: result,
    });
}));
exports.courseController = {
    insertIntoDb,
    getAllCourse,
    getSingleCourse,
    deleteCourse,
    updateCourse
};
