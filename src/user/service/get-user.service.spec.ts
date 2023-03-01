import exp from 'constants';
import { Role } from '../../entities/user.role';
import {
  GetUserOutboundPort,
  GetUserOutboundPortInputDto,
  GetUserOutboundPortOutputDto,
} from '../outbound-port/get-user-outbound-port';
import { GetUserService } from './get-user.service';

class MockGetUserOutboundPort implements GetUserOutboundPort {
  private readonly result: GetUserOutboundPortOutputDto;

  constructor(result: GetUserOutboundPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: GetUserOutboundPortInputDto,
  ): Promise<GetUserOutboundPortOutputDto> {
    return this.result;
  }
}

describe('GetUserService Spec', () => {
  test('유저 개인 조회', async () => {
    const user = {
      userId: 1,
      email: 'test@abc.com',
      name: 'apple',
      role: Role.USER,
    };
    const getUserService = new GetUserService(
      new MockGetUserOutboundPort(user),
    );
    const res = await getUserService.execute(user);

    expect(res).toStrictEqual({
      userId: 1,
      email: 'test@abc.com',
      name: 'apple',
      role: Role.USER,
    });
  });
});
