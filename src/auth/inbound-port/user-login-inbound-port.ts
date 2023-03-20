import { Role } from '../../entities/user.role';

export type UserLoginInboundPortInputDto = {
  email: string;
  password: string;
  role: Role;
};

export type UserLoginInboundPortOutputDto = void;

export const USER_LOGIN_INBOUND_PORT = 'USER_LOGIN_INBOUND_PORT' as const;

export interface UserLoginInboundPort {
  execute(
    params: UserLoginInboundPortInputDto,
  ): Promise<UserLoginInboundPortOutputDto>;
}
