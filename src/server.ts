import express from "express";
import path from "path";
import pageRouter from "./routes/page.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use("/", pageRouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
