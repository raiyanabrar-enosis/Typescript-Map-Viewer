import { faker } from "@faker-js/faker";
import { Location, generateLocation } from "./Location";

export class User {
	name: string;
	location: Location;

	constructor() {
		this.name = faker.person.fullName();
		this.location = generateLocation();
	}
}
