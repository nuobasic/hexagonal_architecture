import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  UpdateUserOutboundPort,
  UpdateUserOutboundPortInputDtoBody,
  UpdateUserOutboundPortInputDtoParma,
  UpdateUserOutboundPortOutputDto,
} from '../outbound-port/update-user.outbound.port';
import * as bcrypt from 'bcrypt';

export class UpdateUserRepository implements UpdateUserOutboundPort {
  constructor(
    @InjectRepository(User)
    private readonly updateUserRepository: Repository<User>,
  ) {}

  async excute(
    params: UpdateUserOutboundPortInputDtoParma,
    Body: UpdateUserOutboundPortInputDtoBody,
  ): Promise<UpdateUserOutboundPortOutputDto> {
    const updateUser = await this.updateUserRepository.findOne({
      where: { userId: params.userId },
    });
    const hashedPassword = await bcrypt.hash(Body.password, 12);
    let result;
    if (updateUser) {
      result = await this.updateUserRepository
        .createQueryBuilder()
        .update(User)
        .set({
          name: Body.name,
          password: (Body.password = hashedPassword),
        })
        .where('userId=:userId', { userId: params.userId })
        .execute();
    }
    return result;
  }
}
