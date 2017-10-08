import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../dataService/data.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData = {
    userName: "",
    name: "",
    age: '',
    profession: "",
    mobile: "",
    profileImageUrl: ""
  };
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.route.params.subscribe(params => {
        console.log(params);
        this.userData =  dataService.getDummyData(params.userName);
        if(!this.userData){
          this.router.navigate(['pageNotFound']);
        }
      }
    );
  }

  goHome(){
    this.router.navigate(['login']);
  }

  deleteMyAccount(user){
  }
}
