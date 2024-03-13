import { faker } from "@faker-js/faker";
import { generateLocation } from "./Location";
export class Company {
    constructor() {
        this.name = faker.company.name();
        this.location = generateLocation();
        this.catchPhrase = faker.company.catchPhrase();
    }
}
