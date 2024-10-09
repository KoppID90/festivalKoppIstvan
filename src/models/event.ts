import { IEvent } from '../interfaces/IEvent';
import { Participant } from './participant';


export class Event implements IEvent {
    constructor(
        public id: number,
        public name: string,
        public location: string,
        public date: Date,
        public participants: Participant[] = [],
        public type: string
    ) {}

    addParticipant(participant: Participant) {
        this.participants.push(participant);
    }

    removeParticipant(participant: Participant) {
        this.participants = this.participants.filter(p => p.name !== participant.name);
    }

    editEvent(newName: string, newLocation: string, newDate: Date, newType: string) {
        this.name = newName;
        this.location = newLocation;
        this.date = newDate;
        this.type = newType;
    }
}