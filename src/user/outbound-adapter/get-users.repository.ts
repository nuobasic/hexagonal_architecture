import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  GetUsersOutboundPort,
  GetUsersOutboundPortInputDto,
  GetUsersOutboundPortOutputDto,
} from '../outbound-port/get-users-outbound-port';

export class GetUsersRepository implements GetUsersOutboundPort {
  constructor(
    @InjectRepository(User)
    private readonly getUsersRepository: Repository<User>,
  ) {}
  async execute(
    params: GetUsersOutboundPortInputDto,
  ): Promise<GetUsersOutboundPortOutputDto> {
    const users = await this.getUsersRepository.find();
    return users.map((user) => {
      return {
        email: user.email,
        name: user.name,
        role: user.role,
      };
    });
  }
}
