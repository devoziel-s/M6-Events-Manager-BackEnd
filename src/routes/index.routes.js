import { Router } from "express";
import { attendeeRouter } from "./attendee.routes.js";
import { eventRouter } from "./event.routes.js";
import { organizerRouter } from "./organizer.routes.js";

export const router = Router();

router.use("/api/attendees", attendeeRouter);
router.use("/api/events", eventRouter);
router.use("/api/organizers", organizerRouter);