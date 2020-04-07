import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { Goals } from '../goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
   private goals:Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
    
    
   
  ];
  getGoals(){
    return this.goals;
  }
  getGoal(id){
    for (let goal of []){
      if (goal.id == id){
        return goal;
      }
    }
  }

  addGoal(goal){
    let goalLength = this.goals.length;
    let goalObj= new Goal(goal.id=goalLength+1,goal.name,goal.description,goal.completeDate=new Date(goal.completeDate))
    
    this.goals.push(goalObj)
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }


  constructor() { }
}
