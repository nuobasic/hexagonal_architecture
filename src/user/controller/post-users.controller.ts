import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  PostUsersInboundInputDto,
  PostUsersInboundPort,
  POST_USERS_INBOUND_PORT,
} from '../inbound-port/post-users.inbound-port';

@Controller()
export class PostUsersController {
  constructor(
    @Inject(POST_USERS_INBOUND_PORT)
    private readonly postUsersInboundPort: PostUsersInboundPort,
  ) {}
  @Post('/signUp')
  async signUp(@Body() postUsersInboundPort: PostUsersInboundInputDto) {
    return await this.postUsersInboundPort.execute(postUsersInboundPort);
  }
}
