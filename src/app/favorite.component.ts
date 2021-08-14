import {EventEmitter, ViewEncapsulation} from "@angular/core";
import {Component, OnInit, Input, Output } from "@angular/core";

@Component(
  {
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css'],
    encapsulation: ViewEncapsulation.Emulated
  }
)
export class FavoriteComponent implements OnInit{
  @Input('is-Favorite') isFavorite: boolean | undefined;
  @Output('change') click = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
  }
  onClick(){
    this.isFavorite = !this.isFavorite
    this.click.emit({newValue:this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}
