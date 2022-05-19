import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
