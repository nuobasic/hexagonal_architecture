import { Inject } from '@nestjs/common';
import {
  GetUserInboundPort,
  GetUserInboundPortInputDto,
  GetUserInboundPortOutputtDto,
} from '../inbound-port/get-user-inbound-port';
import { GetUserOutboundPort } from '../outbound-port/get-user-outbound-port';
import { GET_USERS_OUTBOUND_PORT } from '../outbound-port/get-users.outboubd-port';

export class GetUserService implements GetUserInboundPort {
  constructor(
    @Inject(GET_USERS_OUTBOUND_PORT)
    private readonly getUserOutboundPort: GetUserOutboundPort,
  ) {}

  async execute(
    params: GetUserInboundPortInputDto,
  ): Promise<GetUserInboundPortOutputtDto> {
    return await this.getUserOutboundPort.execute(params);
  }
}
