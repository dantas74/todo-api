import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../core/repositories/user.repository';
import { User } from '../../core/entities/user.entity';

@injectable()
export class FindOneUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
