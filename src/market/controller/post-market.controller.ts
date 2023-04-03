import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../entities/user.entities';
import { GetUser } from '../../auth/decorator/user.decorator';

import {
  PostMarketInboundPortInputDto,
  PostMartketInboundPort,
  POST_MARKET_INBOUND_PORT,
} from '../inbound-port/post-market-inbound-port';

@Controller('market')
export class PostMarketController {
  constructor(
    @Inject(POST_MARKET_INBOUND_PORT)
    private readonly postMarketInboundPort: PostMartketInboundPort,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async postMarket(
    @Body() postMarketInboundPort: PostMarketInboundPortInputDto,
    @GetUser() user: User,
  ) {
    return await this.postMarketInboundPort.excute(postMarketInboundPort);
  }
}
