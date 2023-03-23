import { Role } from '../../entities/user.role';

export type UserLoginOutboundPortInputDto = {
  email: string;
  password: string;
  role: Role;
};

export type UserLoginOutboundPortOutputDto = any;

export const USER_LOGIN_OUTBOUND_PORT = 'USER_LOGIN_OUTBOUND_PORT' as const;

export interface UserLoginOutboundPort {
  execute(
    params: UserLoginOutboundPortInputDto,
  ): Promise<UserLoginOutboundPortOutputDto>;
}
