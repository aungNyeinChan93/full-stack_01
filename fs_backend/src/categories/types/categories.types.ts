/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";


export type Category = Prisma.CategoryGetPayload<object>;

export type CategoryCreate = Prisma.CategoryCreateInput;

export type CategoryUpdate = Prisma.CategoryUpdateInput;

export type CategoryWithPost = Prisma.CategoryGetPayload<{
    include: { posts: true }
}>
