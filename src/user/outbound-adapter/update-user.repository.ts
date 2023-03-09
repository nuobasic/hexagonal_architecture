import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import {
  UpdateUserOutboundPort,
  UpdateUserOutboundPortInputDtoBody,
  UpdateUserOutboundPortInputDtoParma,
  UpdateUserOutboundPortOutputDto,
} from '../outbound-port/update-user.outbound.port';

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
    console.log('11111: ' + updateUser.userId);
    let result;
    if (updateUser) {
      console.log('111111111111111111111111111');
      result = await this.updateUserRepository
        .createQueryBuilder()
        .update(User)
        .set({
          name: Body.name,
          password: Body.password,
        })
        .where('userId=:userId', { userId: params.userId })
        .execute();
    }
    return result;
  }
}
