import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entities';
import { PostUsersController } from './controller/post-users.controller';
import { POST_USERS_INBOUND_PORT } from './inbound-port/post-users.inbound-port';
import { PostUsersRepository } from './outbound-adapter/post-users.repository';
import { POST_USERS_OUTBOUND_PORT } from './outbound-port/post-users.outbout-port';
import { PostUserservice } from './service/post-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PostUsersController],
  providers: [
    {
      provide: POST_USERS_INBOUND_PORT,
      useClass: PostUserservice,
    },
    {
      provide: POST_USERS_OUTBOUND_PORT,
      useClass: PostUsersRepository,
    },
  ],
})
export class UserModule {}
