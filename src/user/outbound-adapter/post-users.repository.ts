import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  PostUsersOutboundPort,
  PostUsersOutboundPortInputDto,
  PostUsersOutboundPortOutputDto,
} from '../outbound-port/post-users.outbout-port';
import { UnauthorizedException } from '@nestjs/common';

export class PostUsersRepository implements PostUsersOutboundPort {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async execute(
    params: PostUsersOutboundPortInputDto,
  ): Promise<PostUsersOutboundPortOutputDto> {
    const findUser = await this.usersRepository.findOne({
      where: { email: params.email },
    });
    if (findUser) {
      throw new UnauthorizedException('중복 이메일');
    }
    const user = await this.usersRepository.save(params);
    return user;
  }
}
