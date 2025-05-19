"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    jwt: {
        jwtAccessToken: process.env.JWT_SECRET,
        jwtExpiresIn: process.env.JWT_EXPIRATION,
        refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
        refreshExpiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
    },
    bcrypt: {
        bacryptSaltRound: process.env.BCRYPT_SALT_ROUNDS,
    },
    resetPasswordCredential: {
        resetPasswordSecret: process.env.RESET_PASSWORD_TOKEN,
        resetTokenExpireIn: process.env.RESET_EXPIRES_IN,
        resetPasswordLink: process.env.RESET_PASSWORD_LINK,
    },
    nodeMailer: {
        GooglePassword: process.env.SEND_MAIL_PASSWORD,
        GoogleEmail: process.env.SEND_MAIL_EMAIL,
    },
    cloudinary: {
        cloudinaryName: process.env.CLOUDINARY_NAME,
        cloduninaryKey: process.env.CLOUDINARY_API_KEY,
        cloudinarySecret: process.env.CLOUDINARY_SECRET,
        cloudinaryURL: process.env.CLOUDINARY_URL
    },
};
