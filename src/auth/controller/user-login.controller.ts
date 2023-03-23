import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  UserLoginInboundPort,
  UserLoginInboundPortInputDto,
  USER_LOGIN_INBOUND_PORT,
} from '../inbound-port/user-login-inbound-port';

@Controller('user')
export class UserLoginController {
  constructor(
    @Inject(USER_LOGIN_INBOUND_PORT)
    private readonly userLoginInboundPrt: UserLoginInboundPort,
  ) {}

  @Post('login')
  async login(@Body() userLoginInboundPrt: UserLoginInboundPortInputDto) {
    return await this.userLoginInboundPrt.execute(userLoginInboundPrt);
  }
}
