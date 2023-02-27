import { Controller, Get, Inject, Param } from '@nestjs/common';
import {
  GetUserInboundPort,
  GET_USER_INBOUND_PORT,
} from '../inbound-port/get-user-inbound-port';

@Controller('user')
export class GetUserGontroller {
  constructor(
    @Inject(GET_USER_INBOUND_PORT)
    private readonly getUserInboundPort: GetUserInboundPort,
  ) {}

  @Get(':userId')
  async getUser(@Param('userId') userId) {
    console.log(userId);
    return await this.getUserInboundPort.execute(userId);
  }
}
