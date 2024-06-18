import { Organizer } from "../entities/Organizer.Entity.js";

export class OrganizerService {
  async registerOrganizer(name, email, phone) {
    try {
      const organizerExists = await Organizer.findOne({ where: { email } });
      if (organizerExists) {
        throw Error("Organizador já cadastrado!");
      }
      await Organizer.create(name, email, phone);
    } catch (error) {}
  }
}
