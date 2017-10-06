import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../dataService/data.service";



@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent {
    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {

    }

    errorMessage: any;

    userName: any;
    name: "";
    age: ''
    profession: "";
    mobile: ""
    profileImageUrl: "";
    userData: {};

    createProfile() {
        if (this.dataService.getDummyData(this.userName) !== undefined) {
            console.log("user already exists");
            this.errorMessage = "user already exists";
            return;
        }

        if (!this.userName) {
            console.log("userName required");
            this.errorMessage = "username required";
            return;
        }

        if (!this.name) {
            console.log("Fullname required");
            this.errorMessage = "Fullname required";
            return;
        }
        if ((this.age && isNaN(parseInt(this.age))) || (this.mobile && isNaN(parseInt(this.mobile)))) {
            console.log("Wrong input");
            this.errorMessage = "Wrong input. Required number";
            return;
        }



        this.userData = {
            userName: this.userName,
            name: this.name,
            age: this.age,
            profession: this.profession,
            mobile: this.mobile,
            profileImageUrl: this.profileImageUrl
        }
        this.dataService.getUsers()[this.userName] = this.userData;
        this.router.navigate(['/profile', this.userName]);
    }
    goHome() {
        this.router.navigate(['/login']);
    }
}