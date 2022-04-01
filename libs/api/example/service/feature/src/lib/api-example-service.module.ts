import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { UserRegistrationService } from './api-example-service-feature';

@Module({
  imports: [CqrsModule],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    UserRegistrationService 
  ],
  exports: [UserRegistrationService]
})
export class RegistrationModule {}