import { Role } from '../../entities/user.role';

export type UpdateUserOutboundPortInputDtoParma = {
  userId: number;
};
export type UpdateUserOutboundPortInputDtoBody = {
  name: string;
  password: string;
};

export type UpdateUserOutboundPortOutputDto = {
  email: string;
  name: string;
  password: string;
  role: Role;
};

export const UPDATE_USER_OUTBOUND_PORT = 'UPDATE_USER_OUTBOUND_PORT' as const;

export interface UpdateUserOutboundPort {
  excute(
    params: UpdateUserOutboundPortInputDtoParma,
    Body: UpdateUserOutboundPortInputDtoBody,
  ): Promise<UpdateUserOutboundPortOutputDto>;
}
