"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
        error: {
            orginalUrl: req.originalUrl,
            method: req.method,
            message: "your requested path is not found ",
        }
    });
};
exports.default = notFound;
