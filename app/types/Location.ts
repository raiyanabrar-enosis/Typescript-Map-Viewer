import { faker } from "@faker-js/faker";

export interface Location {
	lattitude: number;
	longitude: number;
}

export const generateLocation = (): Location => {
	return {
		lattitude: faker.location.latitude(),
		longitude: faker.location.longitude(),
	};
};
