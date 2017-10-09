import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../dataService/data.service";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router, private dataService: DataService) {

  }
  errorMessage = "";
  userName = "";
  title = 'Profile Manager';


  goToProfile() {
    if(!this.userName){
      console.log("username required");
      this.errorMessage = "username required";
      return;
    }

    if(!this.dataService.getUser(this.userName)){
      console.log("this user does not exist");
      this.errorMessage = "this user does not exist";
      return;
    }
    this.router.navigate(['/profile', this.userName]);
  }


  createProfile() {
    this.router.navigate(['/signup']);
  }
}
