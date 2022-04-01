import { Resolver, Args, Query } from '@nestjs/graphql';
import { User } from '@graduates/api/example/repository/shared/interfaces/data-access';
import { UserRegistrationService } from '@graduates/api/example/service/feature';

@Resolver()
export class UsersRegistration {
  constructor(private readonly userRegistrationService: UserRegistrationService) {}

  @Query(() => [User])
  userByEmail(@Args('email') email: string) {
    return this.userRegistrationService.getUserByEmail(email);
  }

}