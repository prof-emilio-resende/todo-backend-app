import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoEntity } from './todo.entity';

@Controller({path: "/api/todo"})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<Array<TodoEntity>> {
    return await this.appService.findAll();
  }

  @Post()
  async create(@Body() body: TodoEntity): Promise<TodoEntity> {
    return await this.appService.create(body);
  }

  @Delete(":id")
  async destroy(@Param("id")id: number): Promise<TodoEntity> {
    const deleted = await this.appService.destroy(id);
    if (deleted == null) throw new NotFoundException();

    return deleted;
  }
}
