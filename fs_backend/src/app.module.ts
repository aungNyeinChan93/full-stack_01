/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';

@Module({
  controllers: [AppController],

  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],

  imports: [
    CustomersModule,
    PrismaModule,
    UsersModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 60000,
        limit: 30
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 50
      }
    ]),
    CategoriesModule,
    PostsModule
  ],
})
export class AppModule { }
