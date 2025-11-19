/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostWithUser } from './types/posts.types';

@Injectable()
export class PostsService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(createPostDto: CreatePostDto) {
    const post = await this.prisma.post.create({
      data: { ...createPostDto }
    })
    return post;
  }

  async findAll(): Promise<PostWithUser[]> {
    const posts = await this.prisma.post.findMany({
      include: { user: true },
      orderBy: { created_at: 'desc' }
    })
    return posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
