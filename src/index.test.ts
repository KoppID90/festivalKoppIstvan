import { Event } from './models/event';

test('Event should have the correct name', () => {
    const event = new Event(1, 'Volt Fesztivál', 'Sopron', new Date(), [], 'music');
    expect(event.name).toBe('Volt Fesztivál');
});