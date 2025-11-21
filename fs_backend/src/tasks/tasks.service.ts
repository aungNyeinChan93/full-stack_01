/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task, TaskCreate, TaskUpdate, TaskWithUser } from './types/tasks.types';

@Injectable()
export class TasksService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(createTaskDto: TaskCreate): Promise<TaskWithUser> {
    const task = await this.prisma.task.create({
      data: { ...createTaskDto },
      include: { user: true }
    })
    return task
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: TaskUpdate) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
