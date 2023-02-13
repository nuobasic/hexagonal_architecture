import { Role } from '../../entities/user.role';

export type PostUsersInboundInputDto = {
  email: string;
  name: string;
  password: string;
  role: Role;
}; //어떠한 input으로 들어고

export type PostUsersInboundOutputDto = {
  email: string;
  name: string;
  role: Role;
}; //어떠한 output으로 나갈지 정함

export const POST_USERS_INBOUND_PORT = 'POST_USERS_INBOUND_PORT' as const;

export interface PostUsersInboundPort {
  execute(params: PostUsersInboundInputDto): Promise<PostUsersInboundOutputDto>;
}
