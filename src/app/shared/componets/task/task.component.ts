import { Component, output, signal } from '@angular/core';
import { ITask } from '../../../core/interfaces/index.ts';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent { 

  text_field = signal ('');
  messageError = signal ('');
  outputTask = output <ITask>();

  resetTask(){
  this.text_field.set('');
  this.messageError.set('');
}

addTask(){

  if (!this.text_field().trim()) {
    this.messageError.set('The task name is required');
    return;
  }

  const newTask : ITask ={
    id: Math.floor(Math.random()*10000),
    name: this.text_field()
  };

  this.outputTask.emit(newTask);
  this.resetTask();

}

 }
