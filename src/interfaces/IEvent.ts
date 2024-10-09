import { Participant } from '../models/participant';

export interface IEvent {
    id: number;
    name: string;
    location: string;
    date: Date;
    participants: Participant[]; 
    type: string;
}