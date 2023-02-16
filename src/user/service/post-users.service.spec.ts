import { Role } from '../../entities/user.role';
import {
  PostUsersOutboundPort,
  PostUsersOutboundPortInputDto,
  PostUsersOutboundPortOutputDto,
} from '../outbound-port/post-users.outbout-port';
import { PostUserservice } from './post-users.service';

class MockPostUsersOutboundPort implements PostUsersOutboundPort {
  private readonly result: PostUsersOutboundPortOutputDto;

  constructor(result: PostUsersOutboundPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: PostUsersOutboundPortInputDto,
  ): Promise<PostUsersOutboundPortOutputDto> {
    return this.result;
  }
}

describe('PostUsersService Spec', () => {
  test('유저 생성', async () => {
    const user = {
      email: 'test@abc.com',
      password: '1234',
      name: 'apple',
      role: Role.USER,
    };
    const postUsersService = new PostUserservice(
      new MockPostUsersOutboundPort(user),
    );

    const res = await postUsersService.execute(user);

    expect(res).toStrictEqual({
      email: 'test@abc.com',
      password: '1234',
      name: 'apple',
      role: Role.USER,
    });
  });
});
