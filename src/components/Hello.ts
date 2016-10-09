import * as ko from 'knockout';

import {IGreetingsService} from '../services/IGreetingsService';

export class HelloViewModel {
    language: KnockoutObservable<string>;
    framework: KnockoutObservable<string>;

    greetingsService: IGreetingsService;
    greeting: KnockoutObservable<string>;

    constructor(
        language: string,
        framework: string,
        greetingsService: IGreetingsService) {

        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        this.greeting = ko.observable('');

        this.greetingsService = greetingsService;
    }

    setGreeting(): void {
        this.greeting(this.greetingsService.getGreeting());
    }
}

