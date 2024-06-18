import { EventService } from "../services/event.service.js";

const instanceEventService = new EventService();

export const createEvent = async (req, res) => {
  const {
    eventName,
    eventDescription,
    eventData,
    eventLocation,
    maxAttendees,
  } = req.body;
  await instanceEventService.createEvent(
    eventName,
    eventDescription,
    eventData,
    eventLocation,
    maxAttendees
  );
  return res
    .status(201)
    .json({ message: `Evento ${eventName} criado com sucesso!` });
};

export const getAllEvents = async (res) => {
  const events = await instanceEventService.getAllEvents();
  return res.status(200).json({ events: events });
};

export const getEventById = async (req, res) => {
  const { id } = req.params;
  const event = await instanceEventService.getEventById(id);
  return res.status(200).json({ event: event });
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await instanceEventService.updateEvent(id, body);
  return res.status(200).json({ message: "Evento atualizado com sucesso!" });
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  await instanceEventService.deleteEvent(id);
  return res.status(200).json({ message: "Evento deletado com sucesso!" });
};
