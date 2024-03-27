import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAll() {
    return this.tasks;
  }

  getOne(id: string) {
    return this.tasks.find(t => t.id === id);
  }

  create(title: string) {
    const task = {
      id: uuid(),
      title,
      completed: false,
    }

    this.tasks.push(task);

    return task;
  }

  remove(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  updateTitle(id: string, title: string) {
    const task = this.getOne(id);
    task.title = title;
    return task;
  }

  toggleCompleted(id: string) {
    const task = this.getOne(id);
    task.completed = !task.completed;
    return task;
  }
}
