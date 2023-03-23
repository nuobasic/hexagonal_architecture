import { User } from '../../entities/user.entities';

export type FindUserOutboindPortInputDto = {
  email: string;
};

export type FindUserOutboindPortOutputtDto = {
  email: string;
  password: string;
};

export const FIND_USER_OUTBOUND_PORT = 'FIND_USER_OUTBOUND_PORT' as const;

export interface FindUserOutboundPort {
  excute(
    params: FindUserOutboindPortInputDto,
  ): Promise<FindUserOutboindPortOutputtDto>;
}
