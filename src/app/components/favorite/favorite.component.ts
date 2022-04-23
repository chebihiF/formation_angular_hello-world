import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['postTitle']
})
export class FavoriteComponent implements OnInit {

  //postTitle: String;
  @Input("postTitle") title :string = "";
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
  }

  onClick(){
    this.change.emit(
      {
        newValue: "new Title",
        change : true 
      }
    );
  }

}
