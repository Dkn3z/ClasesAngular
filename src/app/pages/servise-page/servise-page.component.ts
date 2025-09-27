import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { ITask } from '../../core/interfaces/index.ts';
import { TaskComponent } from '../../shared/componets/task/task.component';
import { TaskListComponent } from '../../shared/componets/task-list/task-list.component';

@Component({
  selector: 'app-servise-page',
  standalone: true,
  imports: [TaskComponent, TaskListComponent],
  templateUrl: './servise-page.component.html',
})
export class ServisePageComponent {

  taskService = inject(TaskService);

  addNewTask(task : ITask){
    this.taskService.addTask(task);
  }

  removeTask(taskId: number){
    this.taskService.removeTask(taskId);
  }
 }
