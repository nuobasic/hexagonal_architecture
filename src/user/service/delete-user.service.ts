import { Inject } from '@nestjs/common';
import {
  DeleteUserInboundPort,
  DeleteUserInboundPortInputDto,
  DeleteUserInboundPortOutputDto,
} from '../inbound-port/delete-user-inbound.port';
import {
  DeleteUserOutboundPort,
  DELETE_USER_OUTBOUND_PORT,
} from '../outbound-port/delete-user-outbound.port';

export class DeleteUserService implements DeleteUserInboundPort {
  constructor(
    @Inject(DELETE_USER_OUTBOUND_PORT)
    private readonly deleteUserOutboundPort: DeleteUserOutboundPort,
  ) {}

  async execute(
    params: DeleteUserInboundPortInputDto,
  ): Promise<DeleteUserInboundPortOutputDto> {
    return await this.deleteUserOutboundPort.excute(params);
  }
}
