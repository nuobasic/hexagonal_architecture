import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './user.entities';

@Entity('market')
export class Market {
  @PrimaryGeneratedColumn()
  marketId: number;

  @Column()
  marketName: string;

  @Column()
  phone: string;

  @Column()
  country: string;

  @ManyToOne(() => User, (user) => user.market)
  user: User;
}
