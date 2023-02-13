import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './user.role';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}
