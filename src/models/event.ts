import { IEvent } from '../interfaces/IEvent';

export class Event implements IEvent {
    constructor(
        public id: number,
        public name: string,
        public location: string,
        public date: Date,
        public participants: string[] = [],
        public type: string
    ) {}

    addParticipant(participant: string) {
        this.participants.push(participant);
    }

    removeParticipant(participant: string) {
        this.participants = this.participants.filter(p => p !== participant);
    }
}