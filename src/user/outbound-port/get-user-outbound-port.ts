import { Role } from '../../entities/user.role';

export type GetUserOutboundPortInputDto = {
  userId: number;
};

export type GetUserOutboundPortOutputDto = {
  email: string;
  name: string;
  role: Role;
};

export const GET_USER_OUTBOUND_PORT = ' GET_USER_OUTBOUND_PORT' as const;

export interface GetUserOutboundPort {
  execute(
    params: GetUserOutboundPortInputDto,
  ): Promise<GetUserOutboundPortOutputDto>;
}
