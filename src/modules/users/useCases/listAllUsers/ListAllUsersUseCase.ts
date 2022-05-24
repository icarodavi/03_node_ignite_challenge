import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { User } from "../../model/User";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (user.admin) {
      const users = this.usersRepository.list();
      return users;
    }
    throw new Error("User not authorized");
  }
}

export { ListAllUsersUseCase };
