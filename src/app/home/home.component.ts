import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
itemCount: number ; //interpolation 
btnText: string = 'Add an Item'; //property 
goalText: string = 'My First Life Goal'; //model 
goals = []; 
constructor() { }

// Life cycle hook init when compo loaded
  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText ="";
    this.itemCount = this.goals.length;

  }
}
