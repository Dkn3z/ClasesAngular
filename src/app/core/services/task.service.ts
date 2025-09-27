import { effect, Injectable, signal } from '@angular/core';
import { ITask } from '../interfaces/index.ts';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 tasks = signal<ITask[]>([]);

  constructor() { }

  addTask(task:ITask){
    this.tasks.update(tasks => [...tasks, task]);
  }

  removeTask(taskId: number){
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  saveTaskToLocalStorage = effect (() =>
localStorage.setItem('tasks', JSON.stringify(this.tasks()))
  );

  loadTaskFromLocalStorage (){
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks) as ITask;
    }
    return [];
  }

}
