import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user: User = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("o usuário não encontrado");
    }

    if (!user.admin) {
      throw new Error("o usuário não é admin");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
