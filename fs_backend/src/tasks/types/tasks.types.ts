/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";


export type Task = Prisma.TaskGetPayload<object>

export type TaskCreate = Prisma.TaskCreateInput;

export type TaskUpdate = Prisma.TaskUpdateInput;

export type TaskWithUser = Prisma.TaskGetPayload<{
    include: { user: true }
}>
