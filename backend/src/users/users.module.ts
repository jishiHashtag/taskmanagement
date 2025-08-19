// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ <-- This line is required
  providers: [UsersService],
  exports: [UsersService], // ✅ export if used in AuthModule
})
export class UsersModule {}
