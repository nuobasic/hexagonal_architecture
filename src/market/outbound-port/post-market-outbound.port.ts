import { User } from '../../entities/user.entities';

export type PostMarketOutboundPortInputDto = {
  marketName: string;
  phone: string;
  country: string;
  user: User;
};

export type PostMarketOutboundPortOutputDto = {
  marketName: string;
  phone: string;
  country: string;
};

export const POST_MARKET_OUTBOUND_PORT = 'POST_MARKET_OUTBOUND_PORT' as const;

export interface PostMartketOutboundPort {
  excute(
    params: PostMarketOutboundPortInputDto,
  ): Promise<PostMarketOutboundPortOutputDto>;
}
