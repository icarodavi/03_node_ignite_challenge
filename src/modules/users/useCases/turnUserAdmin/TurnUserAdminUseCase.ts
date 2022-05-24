import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { User } from "../../model/User";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (user) {
      user.admin = true;
      return user;
    }
    throw new Error("User not found");
  }
}

export { TurnUserAdminUseCase };
