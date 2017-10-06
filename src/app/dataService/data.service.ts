import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    users = {
        "raju": {
            name: "Raju Kumar",
            age: 28,
            profession: "Software Engineer",
            mobile:+919716009978
        },
        "shantanu": {
            name: "Shantanu Mahakale",
            age: 26,
            profession: "Senior Software Engineer",
            mobile:+918939619253
            
        },

    }
    getDummyData(name) {
        return this.users[name];
    }
}