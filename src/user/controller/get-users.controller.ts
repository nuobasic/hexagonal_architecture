import { Controller, Inject, Get } from '@nestjs/common';
import {
  GetUsersInboundPort,
  GET_USERS_INBOUND_PORT,
} from '../inbound-port/get-users-inbound-port';

@Controller('users')
export class GetUsersController {
  constructor(
    @Inject(GET_USERS_INBOUND_PORT)
    private readonly getUsersInboundPort: GetUsersInboundPort,
  ) {}

  @Get()
  async getUsers() {
    return await this.getUsersInboundPort.execute();
  }
}
