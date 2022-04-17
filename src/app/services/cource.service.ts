import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourceService {

  constructor() { }

  getCourses(){
    return ["course1","course2","course3","course4","course5"];
  }
}
