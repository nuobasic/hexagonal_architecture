import { Inject } from '@nestjs/common';
import {
  GetUserInboundPort,
  GetUserInboundPortInputDto,
  GetUserInboundPortOutputtDto,
} from '../inbound-port/get-user-inbound-port';
import {
  GetUserOutboundPort,
  GET_USER_OUTBOUND_PORT,
} from '../outbound-port/get-user-outbound-port';

export class GetUserService implements GetUserInboundPort {
  constructor(
    @Inject(GET_USER_OUTBOUND_PORT)
    private readonly getUserOutboundPort: GetUserOutboundPort,
  ) {}

  async execute(
    params: GetUserInboundPortInputDto,
  ): Promise<GetUserInboundPortOutputtDto> {
    return await this.getUserOutboundPort.execute(params);
  }
}
