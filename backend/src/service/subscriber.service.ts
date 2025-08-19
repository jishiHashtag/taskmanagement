import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscriber } from '../auth/dto/subscriber.entity';
import { CreateSubscriberDto } from '../auth/dto/create-subscriber.dto';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private readonly repo: Repository<Subscriber>,
  ) {}

  create(data: CreateSubscriberDto): Promise<Subscriber> {
    const subscriber = this.repo.create(data);
    return this.repo.save(subscriber);
  }

  findAll(): Promise<Subscriber[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Subscriber | null> {
    return this.repo.findOneBy({ id });
  }

  async remove(id: string) {
    await this.repo.delete(id);
  }
  findByOrganisation(organisation: string) {
    return this.repo.find({
      where: { organisation },
    });
  }
}
