import { faker } from "@faker-js/faker";
import { generateLocation } from "./Location";
export class User {
    constructor() {
        this.name = faker.person.fullName();
        this.location = generateLocation();
    }
}
