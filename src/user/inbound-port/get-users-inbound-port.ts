import { Role } from '../../entities/user.role';

export type GetUsersInboundPortInputDto = void;

export type GetUsersInboundPortOutputDto = Array<{
  name: string;
  email: string;
  role: Role;
}>;

export const GET_USERS_INBOUND_PORT = 'GET_USERS_INBOUND_PORT' as const;

export interface GetUsersInboundPort {
  execute(
    params: GetUsersInboundPortInputDto,
  ): Promise<GetUsersInboundPortOutputDto>;
}
