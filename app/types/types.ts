export interface Location {
	lattitude: number;
	longitude: number;
}

export interface User {
	name: string;
	location: Location;
}

export interface Company {
	name: string;
	catchPhrase: string;
	location: Location;
}
