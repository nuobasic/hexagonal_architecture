import { Role } from '../../entities/user.role';

export type GetUsersInboundPortInputDto = void;

export type GetUsersInboundPortOutputtDto = Array<{
  email: string;
  name: string;
  role: Role;
}>;

export const GET_USERS_INBOUND_PORT = 'POST_USERS_INBOUND_PORT' as const;

export interface GetUsersInboundPort {
  execute(
    params: GetUsersInboundPortInputDto,
  ): Promise<GetUsersInboundPortOutputtDto>;
}
