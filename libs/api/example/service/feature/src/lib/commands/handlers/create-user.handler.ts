import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from '@graduates/api/example/repository/data-access';

import { CreateUserCommand } from '../impl/create-user.command';
import { User } from '@graduates/api/example/repository/shared/interfaces/data-access';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private repository: UserRepository) {} 

  async execute(command: CreateUserCommand) : Promise<User> {
    // Destruct data from command object
    const { userName, userEmail, userPassword } = command; 
    
    // Create new user object from User model
    const user = new User(userName, userEmail, userPassword);
    
    // Save User
    return this.repository.save(user.email, user.password, user.email);
  }
}