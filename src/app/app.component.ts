import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloWorld';
  post = {
    title:"Title",
    isFavorite: true
  }
  onFavoriteChanged(eventArgs :FavoriteChangedEventArgs ){
    console.log("favorite changed: ", eventArgs)
  }
}
