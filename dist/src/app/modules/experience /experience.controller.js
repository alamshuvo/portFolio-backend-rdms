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
exports.experienceController = void 0;
const catchAsync_1 = __importDefault(require("../../../helpers/catchAsync"));
const sendResponse_helpers_1 = __importDefault(require("../../../helpers/sendResponse.helpers"));
const http_status_1 = __importDefault(require("http-status"));
const experience_service_1 = require("./experience.service");
const insertIntoDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = req.body;
    const result = yield experience_service_1.experienceService.insertIntoDb(data, user);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Experience Created  successfully",
        data: result,
    });
}));
const getAllExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_service_1.experienceService.getAllExperience();
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All Experience retrived successfully",
        data: result,
    });
}));
const getSingleExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield experience_service_1.experienceService.getSingleExperience(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Experience retrived successfully",
        data: result,
    });
}));
const deleteExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield experience_service_1.experienceService.deleteSingleExperience(id);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Experience delete successfully",
        data: result,
    });
}));
const updateExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield experience_service_1.experienceService.updateSingleExperience(id, data);
    (0, sendResponse_helpers_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single Experience update  successfully",
        data: result,
    });
}));
exports.experienceController = {
    insertIntoDb,
    getAllExperience,
    getSingleExperience,
    deleteExperience,
    updateExperience
};
