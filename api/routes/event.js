import express from "express";
import {
  countByCity,
  countByType,
  createEvent,
  deleteEvent,
  getAllEvent,
  getEvent,
  updateEvent,
} from "../controllers/event.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createEvent);

router.put("/:id", verifyAdmin, updateEvent);
router.delete("/:id", verifyAdmin, deleteEvent);

router.get("/find/:id", getEvent);

router.get("/", getAllEvent);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
