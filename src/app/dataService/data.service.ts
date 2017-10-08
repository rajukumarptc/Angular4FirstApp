import { Injectable } from "@angular/core";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

@Injectable()
export class DataService {

    dbUsers = {};
    dbRef :FirebaseListObservable<any[]>;

    getDummyData(name) {
        return this.dbUsers[name];
    }
    getUsers(){
        return this.dbUsers;
    }

    addUser(user){
      this.dbRef.push(user);
    }
}
