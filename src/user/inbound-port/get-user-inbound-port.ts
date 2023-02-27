import { Role } from '../../entities/user.role';

export class GetUserInboundPortInputDto {
  userId: number;
}

export class GetUserInboundPortOutputtDto {
  email: string;
  name: string;
  role: Role;
}

export const GET_USER_INBOUND_PORT = 'GET_USER_INBOUND_PORT' as const;

export interface GetUserInboundPort {
  execute(
    params: GetUserInboundPortInputDto,
  ): Promise<GetUserInboundPortOutputtDto>;
}
