import { Controller, Delete, Inject, Param } from '@nestjs/common';
import {
  DeleteUserInboundPort,
  DELETE_USER_INBOUND_PORT,
} from '../inbound-port/delete-user-inbound.port';

@Controller('user')
export class DeleteUserController {
  constructor(
    @Inject(DELETE_USER_INBOUND_PORT)
    private readonly deleteUserInboundPort: DeleteUserInboundPort,
  ) {}

  @Delete(':userId')
  async deleteUser(@Param() param) {
    await this.deleteUserInboundPort.execute(param);
    return {
      statusCode: 200,
      message: '삭제성공',
    };
  }
}
