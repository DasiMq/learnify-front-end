import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared-module/nav-bar/nav-bar.component';
import { CourseInsComponent } from './user-instructor/course-ins/course-ins.component';
import { CourseUpdateComponent } from './user-instructor/course-update/course-update.component';
import { CourseAddComponent } from './user-instructor/course-add/course-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseInsComponent,
    CourseUpdateComponent,
    CourseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
