import { Location, User, Company } from "./types/types";

// @ts-ignore
import { setupMap } from "./map.ts";

const userNames = [
	"AlexSmith",
	"LilyJones",
	"JohnDoe",
	"EmilyJohnson",
	"MichaelBrown",
	"SarahWilson",
	"DavidMiller",
	"JessicaDavis",
	"MatthewTaylor",
	"OliviaMartinez",
];

const companyNames = [
	"TechNova Solutions",
	"Horizon Innovations",
	"Summit Enterprises",
	"Quantum Dynamics",
	"FusionWorks Inc.",
	"Nexus Technologies",
	"Stellar Ventures",
	"Apex Solutions Group",
	"Pinnacle Industries",
	"Elevation Enterprises",
];

const catchPhrases = [
	"Innovating Tomorrow, Today!",
	"Where Dreams Meet Technology.",
	"Inspiring Excellence, Every Step of the Way.",
	"Empowering Your Future, Today.",
	"Building Bridges to Success.",
	"Transforming Ideas into Reality.",
	"Your Success, Our Passion.",
	"Leading the Way in Innovation.",
	"Elevating Expectations, Every Time.",
	"Driving Progress, Together.",
];

const randomlyGenerateUsers = (size: number): User[] => {
	let users = new Array<User>();

	for (let index = 0; index < size; index++) {
		const userIndex = Math.floor(Math.random() * userNames.length);

		const user = {
			name: userNames[userIndex],
			location: {
				lattitude: Math.random() * (100 - -100) + -100,
				longitude: Math.random() * (180 - -180) + -180,
			},
		} as User;

		users.push(user);
	}

	return users;
};

const randomlyGenerateCompany = (): Company => {
	const companyIndex = Math.floor(Math.random() * companyNames.length);
	const catchPhraseIndex = Math.floor(Math.random() * catchPhrases.length);

	const company = {
		name: companyNames[companyIndex],
		location: {
			lattitude: Math.random() * (100 - -100) + -100,
			longitude: Math.random() * (180 - -180) + -180,
		},
		catchPhrase: catchPhrases[catchPhraseIndex],
	} as Company;

	return company;
};

const companySize = 8;
const companies = new Array<Company>();

for (let company = 0; company < companySize; company++) {
	companies.push(randomlyGenerateCompany());
}

const users = randomlyGenerateUsers(13);

console.log(companies);
console.log(users);

// @ts-ignore
setupMap(companies, users);
