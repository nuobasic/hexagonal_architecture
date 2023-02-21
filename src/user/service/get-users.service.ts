import { Inject } from '@nestjs/common';
import {
  GetUsersInboundPort,
  GetUsersInboundPortOutputtDto,
} from '../inbound-port/get-users.inbound.port';
import {
  GetUsersOutboundPort,
  GetUsersOutboundPortInputDto,
  GET_USERS_OUTBOUND_PORT,
} from '../outbound-port/get-users.outboubd-port';

export class GetUsersService implements GetUsersInboundPort {
  constructor(
    @Inject(GET_USERS_OUTBOUND_PORT)
    private readonly getUsersOutboundPort: GetUsersOutboundPort,
  ) {}
  async execute(
    params: GetUsersOutboundPortInputDto,
  ): Promise<GetUsersInboundPortOutputtDto> {
    return await this.getUsersOutboundPort.execute(params);
  }
}
