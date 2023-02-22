import { Role } from '../../entities/user.role';
import {
  GetUsersOutboundPort,
  GetUsersOutboundPortInputDto,
  GetUsersOutboundPortOutputDto,
} from '../outbound-port/get-users.outboubd-port';
import { GetUsersService } from './get-users.service';

class MockGetUsersOutboundPort implements GetUsersOutboundPort {
  private readonly result: GetUsersOutboundPortOutputDto;
  constructor(result: GetUsersOutboundPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: GetUsersOutboundPortInputDto,
  ): Promise<GetUsersOutboundPortOutputDto> {
    return this.result;
  }
}

describe('GetUsersService Spec', () => {
  test('유저 리스트 조회', async () => {
    const user = [
      {
        email: 'test@abc.com',
        name: 'test',
        role: Role.USER,
      },
      {
        email: 'test11@abc.com',
        name: 'test',
        role: Role.USER,
      },
    ];
    const getUsersService = new GetUsersService(
      new MockGetUsersOutboundPort(user),
    );
    const res = await getUsersService.execute();

    expect(res).toStrictEqual([
      {
        email: 'test@abc.com',
        name: 'test',
        role: 'user',
      },
      {
        email: 'test11@abc.com',
        name: 'test',
        role: 'user',
      },
    ]);
  });
});
