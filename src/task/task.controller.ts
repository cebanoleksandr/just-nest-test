import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Get('/id')
  getOne(@Param('id') id: string) {
    return this.taskService.getOne(id);
  }

  @Post()
  create(@Body('title') title: string) {
    return this.create(title);
  }

  @Patch('/id/title')
  updateTitle(@Param('id') id: string, @Body('title') title: string) {
    return this.taskService.updateTitle(id, title);
  }

  @Patch('/id/completed')
  toggleCompleted(@Param('id') id: string) {
    return this.toggleCompleted(id);
  }
}
