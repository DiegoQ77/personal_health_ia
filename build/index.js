"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3939;
app.use(express_1.default.json()); //midleware que transforma la req.body a un json
app.get("/ping", (_req, res) => {
    console.log("someone pinged here!!");
    res.send("pong");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
