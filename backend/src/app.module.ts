// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity/user.entity';
import { SubscriberModule } from './module/subscriber.module';
import { Subscriber } from './auth/dto/subscriber.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'task123',
      database: 'taskdb',
      entities: [User, Subscriber],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]), // optional here, handled in feature modules
    UsersModule,
    AuthModule,
    SubscriberModule,
  ],
})
export class AppModule {}
