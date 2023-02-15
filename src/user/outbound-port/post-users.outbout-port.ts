import { Role } from '../../entities/user.role';

export type PostUsersOutboundPortInputDto = {
  email: string;
  name: string;
  password: string;
  role: Role;
};
export type PostUsersOutboundPortOutputDto = {
  email: string;
  name: string;
  role: Role;
};

export const POST_USERS_OUTBOUND_PORT = 'POST_USERS_OUTBOUND_PORT' as const;

export interface PostUsersOutboundPort {
  execute(
    params: PostUsersOutboundPortInputDto,
  ): Promise<PostUsersOutboundPortOutputDto>;
}
