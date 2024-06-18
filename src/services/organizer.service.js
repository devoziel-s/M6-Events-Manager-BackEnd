import { Organizer } from "../entities/Organizer.Entity.js";

export class OrganizerService {
  async registerOrganizer(name, email, phone) {
    try {
      const organizerExists = await Organizer.findOne({ where: { email } });
      if (organizerExists) {
        throw Error("Organizador já cadastrado!");
      }
      await Organizer.create(name, email, phone);
    } catch (error) {
      throw Error(`Erro ao registrar um organizador: ${error.message} `);
    }
  }

  async getAllOrganizers() {
    try {
      const organizersFound = await Organizer.findAll();
      if (organizersFound.length === 0) {
        throw Error("Nenhum organizador encontrado!");
      }
      return organizersFound;
    } catch (error) {
      throw Error(`Erro ao buscar organizadores! ${error.message}`);
    }
  }

  async getOrganizerById(id) {
    try {
      const organizerFound = await Organizer.findByPk(id);
      if (!organizerFound) {
        throw Error("Organizador não encontrado!");
      }
      return organizerFound;
    } catch (error) {
      throw Error(`Erro ao buscar organizador! ${error.message}`);
    }
  }

  async updateOrganizer(id, body) {
    try {
      const organizerFound = await Organizer.findByPk(id);
      if (!organizerFound) {
        throw Error("Organizador não encontrado!");
      }
      await Organizer.update(body, { where: { id } });
    } catch (error) {
      throw Error(`Erro ao atualizar organizador! ${error.message}`);
    }
  }

  async deleteOrganizer(id) {
    try {
      const organizerFound = await Organizer.findByPk(id);
      if (!organizerFound) {
        throw Error("Organizador não encontrado!");
      }
      await Organizer.destroy({ where: { id } });
    } catch (error) {
      throw Error("Error ao deletar organizador!");
    }
  }
}
