import express from "express";
import { login, register, verify } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id/verify/:token", verify);

export default router;
