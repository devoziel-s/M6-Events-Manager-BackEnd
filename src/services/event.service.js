import { Event } from "../entities/Event.Entity.js";

export class EventService {
  async createEvent(
    eventName,
    eventDescription,
    eventDate,
    eventLocation,
    maxAttendees
  ) {
    try {
      const eventExists = await Event.findOne({ where: { eventName } });

      if (eventExists) {
        throw Error("Evento já cadastrado!");
      }
      await Event.create({
        eventName,
        eventDescription,
        eventDate,
        eventLocation,
        maxAttendees,
      });
    } catch (error) {
      throw Error(`Erro ao criar um evento! ${error.message}`);
    }
  }

  async getAllEvents() {
    try {
      const eventsFound = await Event.findAll();
      if (eventsFound.length === 0) {
        throw Error("Nenhum evento encontrado!");
      }
      return eventsFound;
    } catch (error) {
      throw Error(`Erro ao buscar eventos: ${error.message}`);
    }
  }

  async getEventById(id) {
    try {
      const eventFound = await Event.findByPk(id);
      if (!eventFound) {
        throw Error("Evento não encontrado!");
      }
      return eventFound;
    } catch (error) {
      throw Error(`Erro ao encontrar um evento: ${error.message}`);
    }
  }

  async updateEvent(id, body) {
    try {
      const eventFound = await Event.findByPk(id);
      if (!eventFound) {
        throw Error("Evento não encontrado!");
      }
      await Event.update(body, { where: { id } });
    } catch (error) {
      throw Error(`Erro ao atualizar evento: ${error.message}`);
    }
  }

  async deleteEvent(id) {
    try {
      const eventFound = await Event.findByPk(id);
      if (!eventFound) {
        throw Error("Evento não encontrado");
      }

      await Event.destroy({ where: { id } });
    } catch (error) {
      throw Error(`Erro ao deletar o evento: ${error.message}`);
    }
  }
}
