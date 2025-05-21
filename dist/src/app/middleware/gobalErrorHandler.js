"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    console.log(res.headersSent, "global");
    let statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.name || err.message || "Something went wrong";
    let error = err;
    //   if (err instanceof Prisma.PrismaClientValidationError) {
    //     message = "validation Error";
    //     error = err.message;
    //   } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    //     if (err.code == "P2002") {
    //       message = "Duplicate key Error";
    //       error = err.meta;
    //     }
    //   }
    res.status(statusCode).json({
        success,
        message,
        error,
        stack: err.stack,
    });
    next();
};
exports.default = globalErrorHandler;
