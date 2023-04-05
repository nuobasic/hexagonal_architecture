import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Market } from './market.entity';
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
  static email: string | (() => string);
  static password: string | (() => string);

  @OneToMany(() => Market, (market) => market.user)
  market?: Market;
}
