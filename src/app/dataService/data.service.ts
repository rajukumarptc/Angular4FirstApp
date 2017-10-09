import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class DataService {

    dbUsers = {};
    dbRef :FirebaseListObservable<any[]>;

  constructor(database: AngularFireDatabase) {
    this.dbRef = database.list('/users');
    database.list('/users', { preserveSnapshot: true})
      .subscribe(snapshots=>{
        console.log("data fetched");
        snapshots.forEach(snapshot => {
          this.dbUsers[snapshot.val().userName] = snapshot.val();
        });
      });
  }

    getUser(name) {
        return this.dbUsers[name];
    }
    getUsers(){
        return this.dbUsers;
    }

    addUser(user){
      this.dbRef.push(user);
    }
}
