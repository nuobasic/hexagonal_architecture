import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import {
  UpdateUserInboundPort,
  UpdateUserInboundPortInputDtoBody,
  UPDATE_USER_INBOUND_PORT,
} from '../inbound-port/update-user-inbound.port';

@Controller('user')
export class UpdateUserController {
  constructor(
    @Inject(UPDATE_USER_INBOUND_PORT)
    private readonly updateUserInboundPort: UpdateUserInboundPort,
  ) {}

  @Put(':userId')
  async updateUser(
    @Param() param,
    @Body() updateUserInboundPort: UpdateUserInboundPortInputDtoBody,
  ) {
    return await this.updateUserInboundPort.excute(
      param,
      updateUserInboundPort,
    );
  }
}
