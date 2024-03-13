import { faker } from "@faker-js/faker";
import { Location, generateLocation } from "./Location";

export class Company {
	name: string;
	location: Location;
	catchPhrase: string;

	constructor() {
		this.name = faker.company.name();
		this.location = generateLocation();
		this.catchPhrase = faker.company.catchPhrase();
	}
}
