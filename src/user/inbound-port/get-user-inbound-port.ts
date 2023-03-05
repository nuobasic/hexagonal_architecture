import { Role } from '../../entities/user.role';

export type GetUserInboundPortInputDto = {
  userId: number;
};

export type GetUserInboundPortOutputtDto = {
  email: string;
  name: string;
  role: Role;
};

export const GET_USER_INBOUND_PORT = 'GET_USER_INBOUND_PORT' as const;

export interface GetUserInboundPort {
  execute(
    params: GetUserInboundPortInputDto,
  ): Promise<GetUserInboundPortOutputtDto>;
}
