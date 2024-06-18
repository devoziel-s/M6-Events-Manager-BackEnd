import { Attendee } from "../entities/Attendee.Entity.js";

export class AttendeeService {
  async registerAttendee(name, email, phone) {
    try {
      const attendeeExists = await Attendee.findOne({ where: { email } });

      if (attendeeExists) {
        throw new Error("Email já cadastrado!");
      }

      await Attendee.create({ name, email, phone });
    } catch (error) {
      throw new Error(`Erro ao registrar participante: ${error.message}`);
    }
  }

  async getAllAttendees() {
    try {
      const attendeesFound = await Attendee.findAll();
      if (attendeesFound.length === 0) {
        throw new Error("Nenhum participante encontrado!");
      }
      return attendeesFound;
    } catch (error) {
      throw new Error(`Erro ao buscar participantes: ${error.message}`);
    }
  }

  async getAttendeeById(id) {
    try {
      const attendeeFound = await Attendee.findByPk(id);
      if (!attendeeFound) {
        throw new Error("Participante não encontrado!");
      }
      return attendeeFound;
    } catch (error) {
      throw new Error(`Erro ao buscar participante por ID: ${error.message}`);
    }
  }

  async updateAttendee(id, body) {
    try {
      const attendeeExists = await Attendee.findByPk(id);
      if (!attendeeExists) {
        throw new Error("Participante não encontrado!");
      }

      await Attendee.update(body, { where: { id } });
    } catch (error) {
      throw new Error(`Erro ao atualizar participante: ${error.message}`);
    }
  }

  async deleteAttendee(id) {
    try {
      const attendeeExists = await Attendee.findByPk(id);
      if (!attendeeExists) {
        throw new Error("Participante não encontrado!");
      }

      await Attendee.destroy({ where: { id } });
    } catch (error) {
      throw new Error(`Erro ao deletar participante: ${error.message}`);
    }
  }
}
