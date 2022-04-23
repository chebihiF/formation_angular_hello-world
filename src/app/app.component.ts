import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  course = {
    title : "Formation Angular",
    rating : 4.9745,
    students : 3012,
    price : 109.95,
    realaseDate: new Date(2022,3,1)
  }

  text = "DatePipe is executed only when it detects a pure change to the input value. A pure change is either a change to a primitive input value (such as String, Number, Boolean, or Symbol), or a changed object reference (such as Date, Array, Function, or Object) Note that mutating a Date object does not cause the pipe to be rendered again. To ensure that the pipe is executed, you must create a new Date object."

}
