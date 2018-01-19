import { Component, OnInit, Optional } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('goals',[
      transition('* => *',[
        query(':enter', style({opacity:0}), {optional:true}),
        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:0,transform:'translateY(-75%)',offset:0}),
            style({opacity:0.5,transform:'translateY(35%)',offset:0.3}),
            style({opacity:1,transform:'translateY(0)',offset:1})
          ]))
        ]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35%)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 })
          ]))
        ]), { optional: true }),

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
itemCount: number ; //interpolation 
btnText: string = 'Add an Item'; //property 
goalText: string = 'My First Life Goal'; //model 
goals = ['My First Life Goal','Climb Mountain', 'Go ice Skiing']; 
constructor() { }

// Life cycle hook init when compo loaded
  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    if (!this.goalText) return;
    this.goals.push(this.goalText);
    this.goalText ="";
    this.itemCount = this.goals.length;

  }
  removeItem(i){
    
    this.goals.splice(i,1);
    this.itemCount = this.goals.length;
  }
}
