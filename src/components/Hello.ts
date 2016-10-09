import * as ko from 'knockout';

import {IGreetingsService} from '../services/IGreetingsService';
import {GreetingsService} from '../services/GreetingsService';

class HelloViewModel {
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

ko.applyBindings(new HelloViewModel('TypeScript', 'Knockout', new GreetingsService()));
