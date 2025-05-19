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
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const prisma_1 = require("../../../shared/prisma");
const insertIntoDb = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExist = yield prisma_1.prisma.admin.findFirstOrThrow({
        where: {
            email: user === null || user === void 0 ? void 0 : user.email,
        },
    });
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
    const courseData = yield prisma_1.prisma.course.findUniqueOrThrow({
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
