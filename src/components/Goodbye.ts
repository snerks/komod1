import * as ko from 'knockout';

export class GoodbyeViewModel {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;

    constructor(
        firstName: string,
        lastName: string) {

        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
    }
}