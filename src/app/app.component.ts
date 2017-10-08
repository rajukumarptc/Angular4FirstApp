import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import {DataService} from "./dataService/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users :FirebaseListObservable<any[]>;
  constructor(database: AngularFireDatabase, dataService:DataService) {
    dataService.dbRef = database.list('/users');
     database.list('/users', { preserveSnapshot: true})
      .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          dataService.dbUsers[snapshot.val().userName] = snapshot.val();
        });
      });
  }
}
