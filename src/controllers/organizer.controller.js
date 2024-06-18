import { OrganizerService } from "../services/organizer.service.js";

const instanceOrganizerService = new OrganizerService();

export const createOrganizer = async (req, res) => {
  const { name, email, phone } = req.body;
  await instanceOrganizerService.registerOrganizer(name, email, phone);
  return res
    .status(201)
    .json({ message: `Organizador ${name} criado com sucesso!` });
};

export const getAllOrganizers = async (res) => {
  const organizers = await instanceOrganizerService.getAllOrganizers();
  return res.status(200).json({ organizers: organizers });
};

export const getOrganizerById = async (req, res) => {
  const { id } = req.params;
  const organizer = await instanceOrganizerService.getOrganizerById(id);
  return res.status(200).json({ organizer: organizer });
};

export const updateOrganizer = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await instanceOrganizerService.updateOrganizer(id, body);
  return res
    .status(200)
    .json({ message: "Organizador atualizado com sucesso!" });
};

export const deleteOrganizer = async (req, res) => {
  const { id } = req.params;
  await instanceOrganizerService.deleteOrganizer(id);
  return res.status(200).json({ message: "Organizador deletado com sucesso!" });
};
