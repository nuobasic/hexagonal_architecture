import { Role } from '../../entities/user.role';

export type UpdateUserInboundPortInputDtoParma = {
  userId: number;
};
export type UpdateUserInboundPortInputDtoBody = {
  name: string;
  password: string;
};

export type UpdateUserInboundPortOutputDto = {
  email: string;
  name: string;
  password: string;
  role: Role;
};

export const UPDATE_USER_INBOUND_PORT = 'UPDATE_USER_INBOUND_PORT' as const;

export interface UpdateUserInboundPort {
  excute(
    params: UpdateUserInboundPortInputDtoParma,
    Body: UpdateUserInboundPortInputDtoBody,
  ): Promise<UpdateUserInboundPortOutputDto>;
}
