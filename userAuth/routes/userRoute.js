import express from "express";
import { checkLogin } from "../middleware/checklogin.js";
import {
  createUser,
  getusers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const route = express.Router();
//routers
route.post("/", createUser);
route.get("/", checkLogin, getusers);
route.put("/:id", updateUser);
route.delete("/:id", deleteUser);

export default route;
