import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(private router: Router) { }
    goToProfile(name) {
        this.router.navigate(['/profile', name], { queryParams: { userName: name } });
    }

}