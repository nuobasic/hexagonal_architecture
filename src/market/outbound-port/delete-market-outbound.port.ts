import { User } from '../../entities/user.entities';

export type getUser = {
  user: User;
};

export type DeletMarketOutboundPortInputDto = {
  marketId: number;
};

export type DeletMarketOutboundPortOutputdto = any;

export const DELETE_MARKET_OUTBOUND_PORT =
  'DELETE_MARKET_OUTBOUND_PORT' as const;

export interface DeleteMarketOutboundPort {
  excute(
    params: DeletMarketOutboundPortInputDto,
    getUser: getUser,
  ): Promise<DeletMarketOutboundPortOutputdto>;
}
