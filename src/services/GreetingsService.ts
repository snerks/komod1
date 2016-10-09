import {IGreetingsService} from './IGreetingsService';

export class GreetingsService implements IGreetingsService {
    private counter: number = 0;

    getGreeting(): string {
        this.counter++;

        return `Hello [${this.counter}] !`;
    }
}