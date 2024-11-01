"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
app.use("/", page_routes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
