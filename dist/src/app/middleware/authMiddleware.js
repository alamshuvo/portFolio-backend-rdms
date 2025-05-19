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
const config_1 = __importDefault(require("../../config"));
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../errors/apiError"));
const verifyToken_1 = __importDefault(require("../../helpers/verifyToken"));
const auth = (...role) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "you are not authorized");
            }
            const varifiedUser = (0, verifyToken_1.default)(token, config_1.default.jwt.jwtAccessToken);
            req.user = varifiedUser;
            if (role.length && !role.includes(varifiedUser.role)) {
                throw new apiError_1.default(http_status_1.default.FORBIDDEN, "you are not authorized");
            }
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.default = auth;
