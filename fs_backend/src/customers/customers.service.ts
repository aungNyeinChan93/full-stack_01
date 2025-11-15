/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Customer } from './types/customer.types';

@Injectable()
export class CustomersService {
  constructor(
    private prisma: PrismaService,
  ) { };

  async create(createCustomerDto: Prisma.CustomerCreateInput): Promise<Customer> {
    const customer = await this.prisma.customer.create({
      data: { ...createCustomerDto, created_at: new Date() }
    })
    if (!customer) throw new ConflictException('create customer fail')
    return customer;
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
