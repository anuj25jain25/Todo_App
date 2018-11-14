import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from '../pages/second-page/second-page.component';
import { TodoPageComponent } from '../pages/todo-page/todo-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TodoPageComponent},
  { path: 'second', component: SecondPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
