import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const pageRouter = Router();

pageRouter.get("/", (_, res) => {
  res.render("index");
});

pageRouter.get("/about", (_, res) => {
  res.render("about");
});

pageRouter.get("/contact", (_, res) => {
  res.render("contact");
});

export default pageRouter;
