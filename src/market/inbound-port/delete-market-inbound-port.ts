import { User } from '../../entities/user.entities';

export type getUser = {
  user: User;
};

export type DeletMarketInboundPortInputDto = {
  marketId: number;
};

export type DeletMarketInboundPortOutputdto = any;

export const DELETE_MARKET_INBOUND_PORT = 'DELETE_MARKET_INBOUND_PORT' as const;

export interface DeleteMarketInboundPort {
  excute(
    params: DeletMarketInboundPortInputDto,
    getUser: getUser,
  ): Promise<DeletMarketInboundPortOutputdto>;
}
