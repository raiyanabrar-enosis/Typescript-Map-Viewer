import { Company } from "./types/Company";
import { User } from "./types/User";
// @ts-ignore
import { setupMap } from "./map";
const companySize = 8;
const userSize = 8;
const companies = new Array();
const users = new Array();
for (let company = 0; company < companySize; company++) {
    companies.push(new Company());
}
for (let user = 0; user < userSize; user++) {
    users.push(new User());
}
console.log(companies);
console.log(users);
setupMap(companies, users);
