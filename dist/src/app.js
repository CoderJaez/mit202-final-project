"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const sever_1 = require("sever");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, API_URL } = process.env;
const App = () => {
    (0, sever_1.bootstrap)().listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}${API_URL}`);
    });
};
exports.App = App;
