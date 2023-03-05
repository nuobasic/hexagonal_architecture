import { Inject } from '@nestjs/common';
import {
  GetUsersInboundPort,
  GetUsersInboundPortInputDto,
  GetUsersInboundPortOutputDto,
} from '../inbound-port/get-users-inbound-port';
import {
  GetUsersOutboundPort,
  GET_USERS_OUTBOUND_PORT,
} from '../outbound-port/get-users-outbound-port';

export class GetUsersService implements GetUsersInboundPort {
  constructor(
    @Inject(GET_USERS_OUTBOUND_PORT)
    private readonly getUsersOutboundPort: GetUsersOutboundPort,
  ) {}

  async execute(
    params: GetUsersInboundPortInputDto,
  ): Promise<GetUsersInboundPortOutputDto> {
    return this.getUsersOutboundPort.execute();
  }
}
