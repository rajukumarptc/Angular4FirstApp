import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    users = {
        "raju": {
            userName:'raju',
            name: "Raju Kumar",
            age: 28,
            profession: "Software Engineer",
            mobile:"9716009978",
            profileImageUrl:""
        },
        "shantanu": {
            userName:'shantanu',            
            name: "Shantanu Mahakale",
            age: 26,
            profession: "Senior Software Engineer",
            mobile:"8939619253",
            profileImageUrl:""
            
        },

    }
    getDummyData(name) {
        return this.users[name];
    }
    getUsers(){
        return this.users;
    }
}