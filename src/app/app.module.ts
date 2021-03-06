import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses.component";
import { CourseComponent } from './course/course.component';
import {CoursesService} from "./courses.service";
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from "./summary.pipe";
import {FavoriteComponent} from "./favorite.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [
    CoursesService // dependency injession
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
