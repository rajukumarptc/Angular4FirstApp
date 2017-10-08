import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'pageNotFound',
    templateUrl:'./pageNotFound.component.html',
    styleUrls:['./pageNotFound.component.css']
})

export class PageNotFoundComponent{
    message = 'Page you are looking for does not exist !';
    randomQuote = {};
    constructor(private router: Router) {
      this.randomQuote= PageNotFoundComponent.getRandomQuotes(this.quotes);

    }
    goHome() {
        this.router.navigate(['/login']);
    }

    quotes = [
      {
        quote:"Never let a problem to be solved become more important than the person to be loved.",
        author:"Barbara Johnson",
        imageUrl:"https://quotes.values.com/quote_artwork/6428/large/20171002_monday_quote_values.jpg"
      },
      {
        quote:"The easiest way to make an impact in your community is just to be kind.",
        author:"Joshua Williams",
        imageURL:"https://quotes.values.com/quote_artwork/7684/large/20171006_friday_quote.jpg"
      },
      {
        quote:"Love is not only something you feel, it is something you do.",
        author:"David Wilkerson",
        imageURL:"https://quotes.values.com/quote_artwork/7682/large/20171003_tuesday_quote_values.jpg"
      }
    ];


  private static getRandomQuotes(array){
      return array[this.getRandomInt(0, array.length-1)]
    }

  private static getRandomInt(min: number, max: number) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
