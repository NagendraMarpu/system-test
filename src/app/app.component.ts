import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'system-test';
  tasksInprogress = [];
  tasksCompleted = [];
  tasksPending = [
    "Task1",
    "Task2",
    "Task3",
    "Task4",
    "Task5"
    ];

    constructor() {
    }
    
     pushItemtoInProgess(item, index){
      this.tasksPending.splice(index, 1);
      this.tasksInprogress.push(item);
    }
    
    pushItemtoComplete(item,index) {
      this.tasksInprogress.splice(index, 1);
      this.tasksCompleted.push(item);
    }
  
}
