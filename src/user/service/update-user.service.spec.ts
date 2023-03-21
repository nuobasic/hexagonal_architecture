import { Body } from '@nestjs/common';
import { Role } from '../../entities/user.role';
import {
  UpdateUserOutboundPort,
  UpdateUserOutboundPortInputDtoBody,
  UpdateUserOutboundPortInputDtoParma,
  UpdateUserOutboundPortOutputDto,
} from '../outbound-port/update-user.outbound.port';
import { UpdateUserService } from './update-user.service';

class MockUpdateUserOutboundPort implements UpdateUserOutboundPort {
  private readonly result: UpdateUserOutboundPortOutputDto;

  constructor(result: UpdateUserOutboundPortOutputDto) {
    this.result = result;
  }

  async excute(
    params: UpdateUserOutboundPortInputDtoParma,
    Body: UpdateUserOutboundPortInputDtoBody,
  ): Promise<UpdateUserOutboundPortOutputDto> {
    return this.result;
  }
}

describe('UpdateUserService Spec', () => {
  test('유저 정보 변경', async () => {
    const user = {
      userId: 1,
    };
    const body = {
      email: 'test@abc.com',
      name: 'apple1',
      password: '1234',
      role: Role.USER,
    };
    const body2 = {
      email: 'test@abc.com',
      name: 'apple',
      password: '123456',
      role: Role.USER,
    };
    const updateUserService = await new UpdateUserService(
      new MockUpdateUserOutboundPort(body2),
    );
    const res = await updateUserService.excute(user, body);

    await expect(res.name).toEqual('apple');
    await expect(res.password).toEqual('123456');
  });
});
