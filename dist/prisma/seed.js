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
const client_1 = require("@prisma/client");
const prisma_1 = require("../src/shared/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isExistAdmin = yield prisma_1.prisma.admin.findFirst({
            where: {
                role: client_1.UserRole.ADMIN
            }
        });
        if (isExistAdmin) {
            console.log("admin is already exist");
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash("adminPassword", 15);
        const adminData = yield prisma_1.prisma.admin.create({
            data: {
                name: "Iftakhar Alam",
                email: "admin@gmail.com",
                password: hashedPassword,
                role: client_1.UserRole.ADMIN,
            }
        });
        console.log(adminData, " Admin created sucessfully");
    }
    catch (error) {
        console.log(error);
    }
});
seedAdmin();
