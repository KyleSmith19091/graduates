import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
	constructor(
		public readonly name: string,
		public readonly email: string,
		public readonly password: string
	) {
		super();	
	}
}