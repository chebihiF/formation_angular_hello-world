import { Component, OnInit } from '@angular/core';
import { CourceService } from '../services/cource.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courcese',
  templateUrl: './courcese.component.html',
  styleUrls: ['./courcese.component.css']
})

export class CourceseComponent implements OnInit {

  value = "Hello world"
  title = "My List of cources"
  urlImage = "https://picsum.photos/200/300";
  courses ;
  

  constructor(service: CoursesService, newService: CourceService) {
    this.courses = newService.getCourses();
   }

  ngOnInit(): void {
  }

  test(){
    alert("button pressed")
  }

  clear(){
    this.value = "";
  }

}
