export class CreateUserCommand {
  constructor(
    public readonly userName: string,
    public readonly userEmail: string,
    public readonly userPassword: string
  ) {}
}