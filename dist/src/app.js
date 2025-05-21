"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const gobalErrorHandler_1 = __importDefault(require("./app/middleware/gobalErrorHandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// cron.schedule('* * * * *', () => {
//     try {
//         appointmentService.cancelUnpaidAppointments();
//     } catch (error) {
//         console.error("error");
//     }
//   });
app.get("/", (req, res) => {
    res.send({
        Message: "My PortFolio Server...",
    });
});
app.use("/api/v1", routes_1.default);
app.use(notFound_1.default);
app.use(gobalErrorHandler_1.default);
exports.default = app;
