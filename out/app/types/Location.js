import { faker } from "@faker-js/faker";
export const generateLocation = () => {
    return {
        lattitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
    };
};
