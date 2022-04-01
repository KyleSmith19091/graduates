import { Module } from '@nestjs/common';
import { UsersRegistration } from './user-registration.resolver';
import { UserRegistrationService } from '@graduates/api/example/service/feature';
import { UserRepository } from '@graduates/api/example/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access'; 
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Module({
  imports: [],
  controllers: [],
  providers: [
    UserRepository,
    CommandBus,
    UserRegistrationService,
    QueryBus,
    PrismaService,
    UsersRegistration
  ]
})
export class FeatureModule {}
