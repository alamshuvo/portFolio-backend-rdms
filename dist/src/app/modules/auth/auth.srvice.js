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
exports.authService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../../../shared/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const generateToken_1 = __importDefault(require("../../../helpers/generateToken"));
const verifyToken_1 = __importDefault(require("../../../helpers/verifyToken"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //check is user data exist
    const userData = yield prisma_1.prisma.admin.findUnique({
        where: {
            email: payload.email,
            role: client_1.UserRole.ADMIN,
        },
    });
    if (!userData) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "admin Does not exist");
    }
    // check is password correct
    const isCorrectPassword = yield bcrypt_1.default.compare(payload.password, userData.password);
    if (!isCorrectPassword) {
        throw new Error("password incorect");
    }
    const jwtPayload = {
        email: userData.email,
        role: userData.role,
    };
    const accessToken = (0, generateToken_1.default)(jwtPayload, config_1.default.jwt.jwtAccessToken, config_1.default.jwt.jwtExpiresIn);
    const refreshToken = (0, generateToken_1.default)(jwtPayload, config_1.default.jwt.refreshTokenSecret, config_1.default.jwt.refreshExpiresIn);
    return {
        accessToken,
        refreshToken,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let decodedData;
    try {
        decodedData = (0, verifyToken_1.default)(token, config_1.default.jwt.refreshTokenSecret);
    }
    catch (error) {
        throw new Error("you are not authorized");
    }
    const userData = yield prisma_1.prisma.admin.findUnique({
        where: {
            email: decodedData === null || decodedData === void 0 ? void 0 : decodedData.email,
            role: client_1.UserRole.ADMIN,
        },
    });
    if (!userData) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "admin Does not exist");
    }
    const accessToken = (0, generateToken_1.default)({
        email: userData.email,
        role: userData.role,
    }, config_1.default.jwt.jwtAccessToken, config_1.default.jwt.jwtExpiresIn);
    return {
        accessToken,
        refreshToken,
    };
});
exports.authService = {
    loginUser,
    refreshToken
};
