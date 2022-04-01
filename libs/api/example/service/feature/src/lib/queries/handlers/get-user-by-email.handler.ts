import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@graduates/api/example/repository/data-access';
import { GetUserByEmailQuery } from '../impl/get-user-by-email.query';

@QueryHandler(GetUserByEmailQuery)
export class GetUserByEmailHandler implements IQueryHandler<GetUserByEmailQuery> {
  constructor(private readonly repository: UserRepository) {}

  async execute(query: GetUserByEmailQuery) {
	const {email} = query;
    return this.repository.findOne(email);
  }
}