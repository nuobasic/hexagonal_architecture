import {
  GetUsersOutboundPort,
  GetUsersOutboundPortInputDto,
  GetUsersOutboundPortOutputDto,
} from '../outbound-port/get-users-outbound-port';
import { Role } from '../../entities/user.role';
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
  test('유저 전체 조회', async () => {
    const user = [
      {
        email: 'test@abc.com',
        name: 'apple',
        role: Role.USER,
      },
      {
        email: 'test2@abc.com',
        name: 'apple2',
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
        name: 'apple',
        role: Role.USER,
      },
      {
        email: 'test2@abc.com',
        name: 'apple2',
        role: Role.USER,
      },
    ]);
  });
});
