import express from "express";
import { loginUser, profile } from "../controllers/authController.js";
import { checkLogin } from "../middleware/checklogin.js";
const route = express.Router();

route.get("/", checkLogin, profile);
route.post("/", loginUser);

export default route;
