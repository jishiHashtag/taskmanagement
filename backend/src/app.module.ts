// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity/user.entity';
import { SubscriberModule } from './module/subscriber.module';
import { Subscriber } from './auth/dto/subscriber.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-shiny-heart-ad9yq40x-pooler.c-2.us-east-1.aws.neon.tech',
      port: 5432,
      username: 'neondb_owner',
      password: 'npg_tSDbI6XMRk4a',
      database: 'neondb',
      ssl: { rejectUnauthorized: false },
      entities: [User, Subscriber],
      synchronize: true,
    }),
    /* TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'task123',
      database: 'taskdb',
      entities: [User, Subscriber],
      synchronize: true,
    }),*/
    TypeOrmModule.forFeature([User]), // optional here, handled in feature modules
    UsersModule,
    AuthModule,
    SubscriberModule,
  ],
})
export class AppModule {}
