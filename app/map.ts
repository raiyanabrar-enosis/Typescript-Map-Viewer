import { Company, Location, User } from "./types/types";

// @ts-ignore
var map = L.map("map");
var mapDialog = document.getElementById("mapInfo") as HTMLDialogElement;

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

function addCompaniesToMap(companies: Company[]) {
	for (let index = 0; index < companies.length; index++) {
		const company = companies[index];

		// @ts-ignore
		var companyIcon = L.icon({
			iconUrl: "https://i.imgur.com/QEBEeOP.png",

			iconSize: [28, 28],
			iconAnchor: [14, 14],
		});

		// @ts-ignore
		L.marker([company.location.lattitude, company.location.longitude], {
			icon: companyIcon,
			title: company.name,
			riseOnHover: true,
			autoPanOnFocus: true,
		})
			.addTo(map)
			.on("click", (e: Event) => showMapView(company));
	}
}

function addUsersToMap(users: User[]) {
	for (let index = 0; index < users.length; index++) {
		const user = users[index];

		// @ts-ignore
		L.marker([user.location.lattitude, user.location.longitude], {
			title: user.name,
			riseOnHover: true,
			autoPanOnFocus: true,
		})
			.addTo(map)
			.on("click", (e: Event) => showMapView(user));
	}
}
