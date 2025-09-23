import { Component, signal } from '@angular/core';
import { ITask } from '../../core/interfaces/index.ts';

@Component({
  selector: 'app-data-binding-page',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent {

// define variables 
title = 'Data Binding Page';
text_field = signal ('');
messageError = signal ('');
tasks = signal<ITask[]>([]);

// definir los metodos 
resetTask(){
  this.text_field.set('');
  this.messageError.set('');
}

deleteTask(id: number){
this.tasks.update(tasks => tasks.filter(task => task.id !== id));
}

addTask(){

  if (!this.text_field().trim()) {
    this.messageError.set('The task name is required');
    return;
  }

  const newTask : ITask ={
    id: this.tasks().length + 1,
    name: this.text_field()
  };

  this.tasks.update(tasks =>[...tasks,newTask]);
  this.resetTask();

}

 }
