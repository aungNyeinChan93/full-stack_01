/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */

import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task, TaskCreate, TaskUpdate, TaskWithUser } from './types/tasks.types';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  async findAll(): Promise<TaskWithUser[]> {
    const tasks = await this.prisma.task.findMany({
      include: { user: true },
      orderBy: { created_at: 'desc' },
    })
    return tasks
  }

  async findOne(id: string): Promise<TaskWithUser> {
    const task = await this.prisma.task.findUnique({ where: { id }, include: { user: true } })
    if (!task) throw new HttpException('task not found', HttpStatus.NOT_FOUND)
    return task;
  }

  async update(id: string, updateTaskDto: TaskUpdate): Promise<Task> {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('task Not Found');
    const updateTask = await this.prisma.task.update({
      data: { ...updateTaskDto },
      where: { id },
    })
    return updateTask
  }

  async remove(id: string) {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('task Not Found');
    await this.prisma.task.delete({ where: { id } })
  }
}
