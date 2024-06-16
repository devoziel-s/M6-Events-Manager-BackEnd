import { Attendee } from "../entities/Attendee.Entity.js";
import { Event } from "../entities/Event.Entity.js";
import { Organizer } from "../entities/Organizer.Entity.js";

Event.belongsToMany(Organizer, { through: "organizers_events" });
Organizer.belongsToMany(Event, { through: "organizers_events" });

Event.belongsToMany(Attendee, { through: "attendees_events" });
Attendee.belongsToMany(Event, { through: "attendees_events" });