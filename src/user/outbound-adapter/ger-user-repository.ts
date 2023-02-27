import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  GetUserOutboundPort,
  GetUserOutboundPortInputDto,
  GetUserOutboundPortOutputDto,
} from '../outbound-port/get-user-outbound-port';

export class GetUserRepository implements GetUserOutboundPort {
  constructor(
    @InjectRepository(User)
    private getUserRepository: Repository<User>,
  ) {}

  async execute(
    params: GetUserOutboundPortInputDto,
  ): Promise<GetUserOutboundPortOutputDto> {
    return await this.getUserRepository.findOne({
      where: { userId: params.userId },
    });
  }
}
