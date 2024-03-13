import { Company } from "./types/Company";
import { Location } from "./types/Location";
import { User } from "./types/User";
import { companyIcon, userIcon } from "./icons";

// @ts-ignore
let map = L.map("map");
let mapDialog = document.getElementById("mapInfo") as HTMLDialogElement;

export function setupMap(companies: Company[], users: User[]) {
	// @ts-ignore
	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 21,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);
	setMapView();

	addCompaniesToMap(companies);
	addUsersToMap(users);
}

function setMapView() {
	map.setView([0, 0], 2);
}

function showMapView(item: Company | User) {
	mapDialog.innerHTML = "<button>X</button>";
	mapDialog.querySelector("button")?.addEventListener("click", closeMapView);

	for (const element in item) {
		if (element !== "location") {
			let elem = item[element as keyof (Company | User)];
			let p1 = document.createElement("p");

			p1.innerText = elem.toString();
			mapDialog.appendChild(p1);
		}
	}

	mapDialog.showModal();
	mapFlyView(item.location);
}

function closeMapView() {
	mapDialog.close();
	mapFlyView(
		{
			lattitude: 0,
			longitude: 0,
		},
		2
	);
}

function mapFlyView(location: Location, zoom = 8) {
	map.flyTo([location.lattitude, location.longitude], zoom, {
		animate: true,
		duration: 1,
	});
}

function createMarker(item: User | Company, icon: any) {
	// @ts-ignore
	return L.marker([item.location.lattitude, item.location.longitude], {
		icon: icon,
		title: item.name,
		riseOnHover: true,
		autoPanOnFocus: true,
	});
}

function addCompaniesToMap(companies: Company[]) {
	for (let index = 0; index < companies.length; index++) {
		const company = companies[index];
		putMarkerToMap(company, companyIcon);
	}
}

function addUsersToMap(users: User[]) {
	for (let index = 0; index < users.length; index++) {
		const user = users[index];
		putMarkerToMap(user, userIcon);
	}
}

function putMarkerToMap(item: User | Company, icon: any) {
	createMarker(item, icon)
		.addTo(map)
		.on("click", (e: Event) => showMapView(item));
}
