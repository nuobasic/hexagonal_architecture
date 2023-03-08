import { Inject } from '@nestjs/common';
import {
  UpdateUserInboundPort,
  UpdateUserInboundPortInputDtoBody,
  UpdateUserInboundPortInputDtoParma,
  UpdateUserInboundPortOutputDto,
} from '../inbound-port/update-user-inbound.port';
import {
  UpdateUserOutboundPort,
  UPDATE_USER_OUTBOUND_PORT,
} from '../outbound-port/update-user.outbound.port';

export class UpdateUserService implements UpdateUserInboundPort {
  constructor(
    @Inject(UPDATE_USER_OUTBOUND_PORT)
    private readonly updateUserOutboundPort: UpdateUserOutboundPort,
  ) {}

  async excute(
    params: UpdateUserInboundPortInputDtoParma,
    Body: UpdateUserInboundPortInputDtoBody,
  ): Promise<UpdateUserInboundPortOutputDto> {
    return await this.updateUserOutboundPort.excute(params, Body);
  }
}
