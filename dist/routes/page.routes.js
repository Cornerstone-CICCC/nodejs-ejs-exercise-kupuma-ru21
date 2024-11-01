"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pageRouter = (0, express_1.Router)();
pageRouter.get("/", (_, res) => {
    res.render("index");
});
pageRouter.get("/about", (_, res) => {
    res.render("about");
});
pageRouter.get("/contact", (_, res) => {
    res.render("contact");
});
exports.default = pageRouter;
