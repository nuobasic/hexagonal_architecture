import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  FindUserOutboindPortInputDto,
  FindUserOutboindPortOutputtDto,
  FindUserOutboundPort,
} from '../outbound-port/find-user-outbound-port';

export class FindUserRepository implements FindUserOutboundPort {
  constructor(
    @InjectRepository(User)
    private readonly findUserRepository: Repository<User>,
  ) {}

  async excute(
    params: FindUserOutboindPortInputDto,
  ): Promise<FindUserOutboindPortOutputtDto> {
    return await this.findUserRepository.findOne({
      where: { email: params.email },
    });
  }
}
