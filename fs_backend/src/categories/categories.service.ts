/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Category, CategoryCreate, CategoryWithPost, CategoryUpdate } from './types/categories.types';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(
    private prisma: PrismaService
  ) { }
  async create(createCategoryDto: CategoryCreate): Promise<Category> {
    const category = await this.prisma.category.create({
      data: { ...createCategoryDto },
    })
    return category;
  }

  async findAll(): Promise<CategoryWithPost[]> {
    const categories = await this.prisma.category.findMany({
      include: { posts: true },
      orderBy: { created_at: 'desc' }
    });
    return categories;
  }

  async findOne(id: string): Promise<CategoryWithPost> {
    const category: CategoryWithPost | null = await this.prisma.category.findUnique({ where: { id }, include: { posts: true } })
    if (!category) throw new NotFoundException('category not found!')
    return category;
  }

  async update(id: string, categoryUpdateDto: CategoryUpdate): Promise<Category> {
    const category = await this.prisma.category.update({
      where: { id },
      data: { ...categoryUpdateDto }
    });
    if (!category) throw new ConflictException('Category update fail!')
    return category;
  }

  async remove(id: string) {
    const category = await this.findOne(id)
    if (!category) throw new NotFoundException('category not found!')
    await this.prisma.category.delete({ where: { id } })
    return `Category- ${id} was successfully deleted!`
  }
}
