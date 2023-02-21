import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  GetUsersOutboundPort,
  GetUsersOutboundPortInputDto,
  GetUsersOutboundPortOutputDto,
} from '../outbound-port/get-users.outboubd-port';

export class GetUsersRepository implements GetUsersOutboundPort {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async execute(
    params: GetUsersOutboundPortInputDto,
  ): Promise<GetUsersOutboundPortOutputDto> {
    const users = await this.usersRepository.find();
    return users.map((user) => {
      return {
        name: user.name,
        email: user.email,
        role: user.role,
      };
    });
  }
}
