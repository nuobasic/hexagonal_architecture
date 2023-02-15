import { Inject } from '@nestjs/common';
import {
  PostUsersInboundInputDto,
  PostUsersInboundOutputDto,
  PostUsersInboundPort,
} from '../inbound-port/post-users.inbound-port';
import {
  PostUsersOutboundPort,
  POST_USERS_OUTBOUND_PORT,
} from '../outbound-port/post-users.outbout-port';
import * as bcrypt from 'bcrypt';
export class PostUserservice implements PostUsersInboundPort {
  constructor(
    @Inject(POST_USERS_OUTBOUND_PORT)
    private readonly postUsersOutboudPort: PostUsersOutboundPort,
  ) {}
  async execute(
    params: PostUsersInboundInputDto,
  ): Promise<PostUsersInboundOutputDto> {
    const hashedPassword = await bcrypt.hash(params.password, 12);
    return this.postUsersOutboudPort.execute({
      ...params,
      password: hashedPassword,
    });
  }
}
