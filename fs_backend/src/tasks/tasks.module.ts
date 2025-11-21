/* eslint-disable prettier/prettier */
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    PrismaModule
  ]
})
export class TasksModule { }
