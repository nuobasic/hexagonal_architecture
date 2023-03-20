import { Role } from '../../entities/user.role';

export type JwtPayload = {
  email: string;
  role: Role;
};
