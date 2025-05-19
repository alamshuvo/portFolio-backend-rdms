"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (payload, secret, expiresIn) => {
    const signOptions = {
        algorithm: "HS256",
        expiresIn: expiresIn,
    };
    const token = jsonwebtoken_1.default.sign(payload, secret, signOptions);
    return token;
};
exports.default = generateToken;
