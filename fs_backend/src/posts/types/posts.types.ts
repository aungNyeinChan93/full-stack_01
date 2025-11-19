/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";



export type Post = Prisma.PostGetPayload<object>;

export type PostCreate = Omit<Prisma.PostCreateInput, 'user'>;

export type PostUpdate = Prisma.PostUpdateInput;

export type PostWithUser = Prisma.PostGetPayload<{
    include: { user: true }
}>