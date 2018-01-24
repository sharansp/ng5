import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent} from "./about/about.component";
import { ChatDialogComponent } from "./chat/chat-dialog/chat-dialog.component";

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about/:id', //route param
    component:AboutComponent
  },
  {
    path: 'chat', //route param
    component:ChatDialogComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
