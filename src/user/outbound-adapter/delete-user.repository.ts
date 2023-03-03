import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  DeleteUserOutboundPort,
  DeleteUserOutboundPortInputDto,
  DeleteUserOutboundPortOutputDto,
} from '../outbound-port/delete-user-outbound.port';

export class DeletUserepository implements DeleteUserOutboundPort {
  constructor(
    @InjectRepository(User)
    private readonly deleteUserRepository: Repository<User>,
  ) {}

  async excute(
    params: DeleteUserOutboundPortInputDto,
  ): Promise<DeleteUserOutboundPortOutputDto> {
    return await this.deleteUserRepository.delete(params.userId);
  }
}
