import { Inject, UnauthorizedException } from '@nestjs/common';

import {
  UserLoginInboundPort,
  UserLoginInboundPortInputDto,
} from '../inbound-port/user-login-inbound-port';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  FindUserOutboundPort,
  FIND_USER_OUTBOUND_PORT,
} from '../../user/outbound-port/find-user-outbound-port';

export class UserLoginService implements UserLoginInboundPort {
  constructor(
    @Inject(FIND_USER_OUTBOUND_PORT)
    private readonly findUserOutboundPort: FindUserOutboundPort,
    private readonly jwtService: JwtService,
  ) {}

  async execute(params: UserLoginInboundPortInputDto): Promise<any> {
    const { email, password, role } = params;
    const user = await this.findUserOutboundPort.excute({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const paylod = { email, role };
      const accessToken = await this.jwtService.sign(paylod);

      return { accessToken };
    } else {
      throw new UnauthorizedException('login 실패');
    }
  }
}
