import { Router } from "express";
import {
  deleteAttendee,
  getAllAttendees,
  getAttendeeById,
  registerAttendee,
  updateAttendee,
} from "../controllers/attendee.controller.js";

export const attendeeRouter = Router();

attendeeRouter.post("/", registerAttendee);
attendeeRouter.get("/", getAllAttendees);
attendeeRouter.get("/:id", getAttendeeById);
attendeeRouter.put("/:id", updateAttendee);
attendeeRouter.delete("/:id", deleteAttendee);
