import { Location, User, Company } from "./types/types";
import { faker } from "@faker-js/faker";

// @ts-ignore
import { setupMap } from "./map.ts";

const generateLocation = (): Location => {
	return {
		lattitude: faker.location.latitude(),
		longitude: faker.location.longitude(),
	};
};

const randomlyGenerateItem = <Type>(type: string): Type => {
	// if type is user, set the name to person.fullName, else company.name
	// add the key catchPhrase if type is company
	// location key is common for both types
	const item = {
		name: type === "user" ? faker.person.fullName() : faker.company.name(),
		location: generateLocation(),
		...(type === "company" && { catchPhrase: faker.company.catchPhrase() }),
	} as Type;

	return item;
};

const companySize = 8;
const userSize = 8;
const companies = new Array<Company>();
const users = new Array<User>();

for (let company = 0; company < companySize; company++) {
	companies.push(randomlyGenerateItem<Company>("company"));
}

for (let user = 0; user < userSize; user++) {
	users.push(randomlyGenerateItem<User>("user"));
}

console.log(companies);
console.log(users);

// @ts-ignore
setupMap(companies, users);
