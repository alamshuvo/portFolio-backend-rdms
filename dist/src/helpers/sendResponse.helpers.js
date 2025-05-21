"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, { statusCode, success, message, meta, data, }) => {
    res.status(statusCode).json({
        statusCode,
        success,
        message,
        meta: meta !== null && meta !== void 0 ? meta : null,
        data: data !== null && data !== void 0 ? data : null,
    });
};
exports.default = sendResponse;
