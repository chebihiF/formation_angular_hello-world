import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourceseComponent } from './courcese/courcese.component';
import { FormsModule } from '@angular/forms'
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourceseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
