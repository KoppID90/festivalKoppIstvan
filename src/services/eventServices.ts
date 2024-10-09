import { Event } from '../models/event';

export class EventService {
    private events: Event[] = [];

    addEvent(event: Event) {
        this.events.push(event);
    }

    getEventsByType(type: string): Event[] {
        return this.events.filter(event => event.type === type);
    }

}