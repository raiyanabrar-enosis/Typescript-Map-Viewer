import { companyIcon, userIcon } from "./icons";
// @ts-ignore
let map = L.map("map");
let mapDialog = document.getElementById("mapInfo");
export function setupMap(companies, users) {
    // @ts-ignore
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 21,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    setMapView();
    addCompaniesToMap(companies);
    addUsersToMap(users);
}
function setMapView() {
    map.setView([0, 0], 2);
}
function showMapView(item) {
    var _a;
    mapDialog.innerHTML = "<button>X</button>";
    (_a = mapDialog.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", closeMapView);
    for (const element in item) {
        if (element !== "location") {
            let elem = item[element];
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
    mapFlyView({
        lattitude: 0,
        longitude: 0,
    }, 2);
}
function mapFlyView(location, zoom = 8) {
    map.flyTo([location.lattitude, location.longitude], zoom, {
        animate: true,
        duration: 1,
    });
}
function createMarker(item, icon) {
    // @ts-ignore
    return L.marker([item.location.lattitude, item.location.longitude], {
        icon: icon,
        title: item.name,
        riseOnHover: true,
        autoPanOnFocus: true,
    });
}
function addCompaniesToMap(companies) {
    for (let index = 0; index < companies.length; index++) {
        const company = companies[index];
        putMarkerToMap(company, companyIcon);
    }
}
function addUsersToMap(users) {
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        putMarkerToMap(user, userIcon);
    }
}
function putMarkerToMap(item, icon) {
    console.log(typeof item);
    createMarker(item, icon)
        .addTo(map)
        .on("click", (e) => showMapView(item));
}
