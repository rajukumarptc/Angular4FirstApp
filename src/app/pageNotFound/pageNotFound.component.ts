import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'pageNotFound',
    templateUrl:'./pageNotFound.component.html',
    styleUrls:['./pageNotFound.component.css']
})

export class PageNotFoundComponent{
    message = 'Page Note found';
    constructor(private router: Router) { }
    goHome() {
        this.router.navigate(['/login']);
    }
}