import { Component, input, output } from '@angular/core';
import { ITask } from '../../../core/interfaces/index.ts';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent { 

  outputTaskId = output <number>();
  tasks = input.required <ITask[]>();

  deleteTask(id : number){
    this.outputTaskId.emit(id);
  }


}
