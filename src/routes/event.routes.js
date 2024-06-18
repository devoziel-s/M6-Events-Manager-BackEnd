import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} from "../controllers/event.controller.js";

export const eventRouter = Router();

eventRouter.post("/", createEvent);
eventRouter.delete("/:id", deleteEvent);
eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventById);
eventRouter.put("/:id", updateEvent);
