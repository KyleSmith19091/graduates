import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { User } from '@graduates/api/example/repository/shared/interfaces/data-access';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string) {
    return new User("email@example.com", "eioeoiioeoji@(jveui", "Example");
  }

  async save(email: string, password: string, name: string) {
    console.log("Inserted a User");
    return new User("email@example.com", "eioeoiioeoji@(jveui", "Example");
  }

}
