import { User } from '../../entities/user.entities';

export type PostMarketInboundPortInputDto = {
  marketName: string;
  phone: string;
  country: string;
  user: User;
};

export type PostMarketInboundPortOutputDto = {
  marketName: string;
  phone: string;
  country: string;
};

export const POST_MARKET_INBOUND_PORT = 'POST_MARKET_INBOUND_PORT' as const;

export interface PostMartketInboundPort {
  excute(
    params: PostMarketInboundPortInputDto,
  ): Promise<PostMarketInboundPortOutputDto>;
}
