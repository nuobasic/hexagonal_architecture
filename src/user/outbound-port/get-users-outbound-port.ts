import { Role } from '../../entities/user.role';

export type GetUsersOutboundPortInputDto = void;

export type GetUsersOutboundPortOutputDto = Array<{
  name: string;
  email: string;
  role: Role;
}>;

export const GET_USERS_OUTBOUND_PORT = 'GET_USERS_OUTBOUND_PORT' as const;

export interface GetUsersOutboundPort {
  execute(
    params: GetUsersOutboundPortInputDto,
  ): Promise<GetUsersOutboundPortOutputDto>;
}
