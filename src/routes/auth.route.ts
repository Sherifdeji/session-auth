import express from "express";
import {
  login,
  test,
  signup,
  signout,
  deleteUser,
} from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.get("/", test);

authRouter.get("/login", login);

authRouter.get("/signup", signup);

authRouter.get("/signout", signout);

authRouter.get("/delete", deleteUser);

export default authRouter;
