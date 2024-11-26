import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepo: Repository<TodoEntity>
  ) { }

  async findAll(): Promise<Array<TodoEntity>> {
    return await this.todoRepo.find();
  }

  async create(todo: TodoEntity) {
    return await this.todoRepo.save(todo);
  }

  async destroy(id: number): Promise<TodoEntity> {
    const todo = await this.todoRepo.findOneBy({id: id});
    if (todo == null || todo == undefined || !todo.id) {
      return null;
    }

    await this.todoRepo.delete(todo);

    return todo;
  }
}
