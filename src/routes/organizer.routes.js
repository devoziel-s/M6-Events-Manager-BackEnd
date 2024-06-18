import { Router } from "express";
import {
  registerOrganizer,
  deleteOrganizer,
  getAllOrganizers,
  getOrganizerById,
  updateOrganizer,
} from "../controllers/organizer.controller.js";

export const organizerRouter = Router();

organizerRouter.delete("/:id", deleteOrganizer);
organizerRouter.get("/", getAllOrganizers);
organizerRouter.get("/:id", getOrganizerById);
organizerRouter.post("/", registerOrganizer);
organizerRouter.put("/:id", updateOrganizer);
