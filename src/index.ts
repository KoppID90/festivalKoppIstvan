import { Event } from './models/event';
import { EventService } from './services/eventServices';
import { Participant } from './models/participant';

const eventService = new EventService();

/* fesztivál hozzáadása */

const musicFestival = new Event(
    1, "Volt Fesztivál",
    "Sopron",
    new Date('2024-06-15T14:00:00'),
    [],
    "Zene"
);

console.log(musicFestival);

/* fesztivál adatok módosítása */

musicFestival.editEvent("Volt Fesztivál", "Sopron - Lővér Kemping", new Date('2024-07-01T16:00:00'), "Koncert");

console.log(musicFestival);

/* résztvevők hozzáadása */

const participant1 = new Participant("Kovács Anna");
const participant2 = new Participant("NAgy Béla");

musicFestival.addParticipant(participant1);
musicFestival.addParticipant(participant2);

/* résztvevő törlése */

musicFestival.removeParticipant(participant1);

console.log(musicFestival);

/* Zene típusú fesztiválok lekérdezése */

const musicEvents = eventService.getEventsByType("Zene");
console.log(`Zenei események száma: ${musicEvents.length}`);