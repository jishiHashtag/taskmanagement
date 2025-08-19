import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from '../auth/dto/subscriber.entity';
import { SubscriberService } from '../service/subscriber.service';
import { SubscriberController } from '../controller/subscriber.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule {}
