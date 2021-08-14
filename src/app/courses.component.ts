import { Component} from "@angular/core";
import {CoursesService} from "./courses.service";

@Component({
  selector: 'courses',
  template: `
    <h2>{{ "Title: "+getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img [src]="imageUrl"/>
    <table>
      <tr><td [attr.colspan]="colSpan"></td></tr>
    </table>
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      [style.backgroundColor]="isActive?'blue':'white'"
      (click)="onSave($event)">
      Save
    </button>
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
<!--
<input [value]="myemail" (keyup.enter)="myemail = $event.target.value; onKeyUp2()"/>
-->
    <input [(ngModel)]="myemail" (keyup.enter)="onKeyUp2()"/>
    {{ course.title | uppercase  }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency: 'AUD':true:'3.2-2'}}<br/>
    {{ course.releaseDate | date: 'shortDate' }}

    {{ text | summary:10 }}
  `
})
export class CoursesComponent{
  title = "List of Courses";
  courses;
  imageUrl = "";
  colSpan = 2;
  myemail = "me@email.com";
  isActive = true;   // this is for class binding, depending on this, the active class be added (or not)

  course = {
    title: "The complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3,1)
  }

  text = `wothohsalghsalfjsalkoahtoiwahthfkdsahfksaljhgksahoiwhkgsalfd`
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  getTitle(){
    return this.title
  }
  onSave($event :MouseEvent){
    $event.stopPropagation();
    console.log("bbbbb", $event);
  }
  onKeyUp(email:string){
    console.log("Enter was pressed: "+email);
  }
  onKeyUp2(){
    console.log(this.myemail);
  }
}

// ng g c course
