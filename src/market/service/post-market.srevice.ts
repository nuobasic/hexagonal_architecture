import { Inject } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { Role } from '../../entities/user.role';
import {
  PostMarketInboundPortInputDto,
  PostMarketInboundPortOutputDto,
  PostMartketInboundPort,
} from '../inbound-port/post-market-inbound-port';
import {
  PostMartketOutboundPort,
  POST_MARKET_OUTBOUND_PORT,
} from '../outbound-port/post-market-outbound.port';

export class PostmarketService implements PostMartketInboundPort {
  constructor(
    @Inject(POST_MARKET_OUTBOUND_PORT)
    private readonly postMarketOutboundPort: PostMartketOutboundPort,
  ) {}

  async excute(
    params: PostMarketInboundPortInputDto,
  ): Promise<PostMarketInboundPortOutputDto> {
    if (!Role.SELLER) {
      throw new ForbiddenException('권한이 없습니다.');
    }
    return await this.postMarketOutboundPort.excute(params);
  }
}
