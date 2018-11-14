import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {MatListModule} from '@angular/material/list';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoListComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
