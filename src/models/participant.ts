export class Participant {
    
    private privateName: string;

    constructor(name: string) {
        this.privateName = name;
    }

    get name(): string {
        return this.privateName;
    }

    set name(value: string) {
        this.privateName = value;
    }
}