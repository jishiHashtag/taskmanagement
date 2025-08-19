import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { SubscriberService } from '../service/subscriber.service';
import { CreateSubscriberDto } from '../auth/dto/create-subscriber.dto';

@Controller('subscribers')
export class SubscriberController {
  constructor(private readonly service: SubscriberService) {}

  @Post()
  create(@Body() body: CreateSubscriberDto) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
  
  @Get('organisation/:organisation')
  findByOrganisation(@Param('organisation') organisation: string) {
    return this.service.findByOrganisation(organisation);
  }
}
