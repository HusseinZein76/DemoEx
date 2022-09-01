import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { Task } from "./entities/task.entity";

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private readonly tasksRepository: Repository<Task>) {}
  findAll(): Observable<Task[]> {
    return from(this.tasksRepository.find());
  }
}
