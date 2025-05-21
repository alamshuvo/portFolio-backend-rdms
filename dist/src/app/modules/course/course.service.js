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
exports.courseService = void 0;
const prisma_1 = require("../../../shared/prisma");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const insertIntoDb = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExist = yield prisma_1.prisma.admin.findUnique({
        where: {
            email: user === null || user === void 0 ? void 0 : user.email,
        },
    });
    if (!isAdminExist) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "admin Does not exist");
    }
    const courseData = Object.assign(Object.assign({}, payload), { adminId: isAdminExist.id });
    const courseDatas = yield prisma_1.prisma.course.create({
        data: courseData,
    });
    return courseDatas;
});
const getAllCourse = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield prisma_1.prisma.course.findMany({
        select: {
            id: true,
            courseName: true,
            duration: true,
            certificate: true,
            admin: true,
        },
    });
    return allData;
});
const getSinglecourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield prisma_1.prisma.course.findUnique({
        where: {
            id,
        },
    });
    return courseData;
});
const deleteSingleCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield prisma_1.prisma.course.delete({
        where: {
            id,
        },
    });
    return courseData;
});
const updateSingleCourse = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield prisma_1.prisma.course.update({
        where: {
            id,
        },
        data: payload,
    });
    return courseData;
});
exports.courseService = {
    insertIntoDb,
    getAllCourse,
    getSinglecourse,
    deleteSingleCourse,
    updateSingleCourse
};
