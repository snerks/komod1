import * as ko from 'knockout';

import {IGreetingsService} from './services/IGreetingsService';
import {GreetingsService} from './services/GreetingsService';

import {HelloViewModel} from './components/Hello';
import {GoodbyeViewModel} from './components/Goodbye';

class AppViewModel {
    helloViewModel: HelloViewModel;
    goodbyeViewModel: GoodbyeViewModel;

    greetingsService: IGreetingsService;
    greeting: KnockoutObservable<string>;

    constructor(
        helloViewModel: HelloViewModel,
        goodbyeViewModel: GoodbyeViewModel) {

        this.helloViewModel = helloViewModel;
        this.goodbyeViewModel = goodbyeViewModel;
    }
}

const helloViewModel: HelloViewModel = new HelloViewModel('TypeScript', 'Knockout', new GreetingsService());
const goodbyeViewModel: GoodbyeViewModel = new GoodbyeViewModel('Bob', 'Smith');

ko.applyBindings(new AppViewModel(helloViewModel, goodbyeViewModel));