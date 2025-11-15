/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";



export type UserWithPosts = Prisma.UserGetPayload<{
    include: { posts: true }
}>