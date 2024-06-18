import { AttendeeService } from "../services/attendee.service.js";

const instanceAttendeeService = new AttendeeService();

export const registerAttendee = async (req, res) => {
  const { name, email, phone } = req.body;
  await instanceAttendeeService.registerAttendee(name, email, phone);
  return res
    .status(201)
    .json({ message: `Participante ${name} criado com sucesso!` });
}

export const getAllAttendees = async (res) => {
  const attendees = await instanceAttendeeService.getAllAttendees();
  return res.status(200).json({ attendees: attendees });
}

export const getAttendeeById = async (req, res) => {
  const { id } = req.params;
  const attendee = await instanceAttendeeService.getAttendeeById(id);
  return res.status(200).json({ attendee: attendee });
}

export const updateAttendee = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await instanceAttendeeService.updateAttendee(id, body);
  return res
    .status(200)
    .json({ message: "Participante atualizado com sucesso!" });
}

export const deleteAttendee = async (req, res) => {
  const { id } = req.params;
  await instanceAttendeeService.deleteAttendee(id);
  return res
    .status(200)
    .json({ message: "Participante deletado com sucesso!" });
}
