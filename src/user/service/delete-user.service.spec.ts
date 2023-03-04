import {
  DeleteUserOutboundPort,
  DeleteUserOutboundPortInputDto,
  DeleteUserOutboundPortOutputDto,
} from '../outbound-port/delete-user-outbound.port';
import { DeleteUserService } from './delete-user.service';

class MockDeleteUserOutboundPort implements DeleteUserOutboundPort {
  private readonly result: DeleteUserOutboundPortOutputDto;

  constructor(result: DeleteUserOutboundPortOutputDto) {
    this.result = result;
  }

  async excute(
    params: DeleteUserOutboundPortInputDto,
  ): Promise<DeleteUserOutboundPortOutputDto> {
    return this.result;
  }
}

describe('DeleteUserService Spec', () => {
  test('유저 삭제', async () => {
    const user = {
      userId: 1,
    };
    const deleteUserService = new DeleteUserService(
      new MockDeleteUserOutboundPort(user),
    );
    const res = await deleteUserService.execute(user);

    expect(res).toStrictEqual = undefined;
  });
});
