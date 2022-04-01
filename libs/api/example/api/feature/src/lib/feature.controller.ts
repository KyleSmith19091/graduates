import { Controller, Get } from '@nestjs/common';

// Please GraphQL resolvers for this project

@Controller('example')
export class FeatureController {
  @Get()
  findAll(): string {
    return 'This action returns all examples';
  }
}
