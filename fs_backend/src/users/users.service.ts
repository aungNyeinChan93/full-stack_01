import { UserPaginationDto } from './dto/user-pagination.dto';
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserWithPosts } from './types/users.types';
import { UserPagination } from './types/user-pagination.types';
import { connect } from 'http2';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(createUserDto: Prisma.UserCreateInput): Promise<UserWithPosts> {
    const user = await this.prisma.user.create({
      data: { ...createUserDto, age: Number(createUserDto?.age), userPrefrence: { create: { emailVefify: false } } },
      include: { posts: true },
    })
    return user
  }

  async findAll(userPaginationDto: UserPaginationDto): Promise<UserPagination<UserWithPosts>> {
    const currentPage = Number(userPaginationDto.page) || 1;
    const limit = Number(userPaginationDto?.limit) || 10;
    const name = userPaginationDto?.name || '';
    const role = userPaginationDto?.role || undefined;
    const skip = (currentPage - 1) * limit;
    const totalUser = await this.prisma.user.count();
    const totalPage = Math.max(1, Math.ceil(totalUser / limit));

    const where = role && name ? {
      AND: [
        { name: name },
        { role: role }
      ]
    } : role || name ? {
      OR: [
        { name: name },
        { role: role }
      ]
    } : undefined;

    const users = await this.prisma.user.findMany({
      where,
      include: { posts: true },
      take: limit,
      skip,
      orderBy: { created_at: 'desc' }
    });
    return { currentPage, totalPage, limit, items: users, totalItem: users?.length } as UserPagination<UserWithPosts>
  }

  async findOne(id: string): Promise<UserWithPosts> {
    const user: UserWithPosts | null = await this.prisma.user.findUnique({ where: { id }, include: { posts: true } })
    if (!user) throw new HttpException('User not Found', HttpStatus.NOT_FOUND)
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
