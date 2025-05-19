"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsonData) => {
    const { statusCode, success, message, meta, data } = jsonData;
    res.status(statusCode).json({
        statusCode,
        success,
        message,
        meta: meta || null || undefined,
        data: data || null || undefined,
    });
};
exports.default = sendResponse;
