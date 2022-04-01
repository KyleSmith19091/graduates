import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserCommand } from './commands/impl/create-user.command';
import { GetUserByEmailQuery } from './queries/impl/get-user-by-email.query';

@Injectable()
export class UserRegistrationService {
  constructor(
     private readonly commandBus: CommandBus,
     private readonly queryBus: QueryBus
   ) {}

  async createUser(userName: string, userEmail: string, userPassword: string) {
    return this.commandBus.execute(
      new CreateUserCommand(userName, userEmail, userPassword)
    );
  }

  async getUserByEmail(email: string) {
    return this.queryBus.execute(
      new GetUserByEmailQuery(email)
    );
  }
}
