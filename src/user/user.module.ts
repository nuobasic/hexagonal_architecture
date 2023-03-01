import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entities';
import { GetUserGontroller } from './controller/get-user.controller';

import { PostUsersController } from './controller/post-users.controller';
import { GET_USER_INBOUND_PORT } from './inbound-port/get-user-inbound-port';

import { POST_USERS_INBOUND_PORT } from './inbound-port/post-users.inbound-port';
import { GetUserRepository } from './outbound-adapter/get-user-repository';

import { PostUsersRepository } from './outbound-adapter/post-users.repository';
import { GET_USER_OUTBOUND_PORT } from './outbound-port/get-user-outbound-port';

import { POST_USERS_OUTBOUND_PORT } from './outbound-port/post-users.outbout-port';
import { GetUserService } from './service/get-user.service';

import { PostUserservice } from './service/post-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PostUsersController, GetUserGontroller],
  providers: [
    {
      provide: POST_USERS_INBOUND_PORT,
      useClass: PostUserservice,
    },
    {
      provide: POST_USERS_OUTBOUND_PORT,
      useClass: PostUsersRepository,
    },
    {
      provide: GET_USER_INBOUND_PORT,
      useClass: GetUserService,
    },
    {
      provide: GET_USER_OUTBOUND_PORT,
      useClass: GetUserRepository,
    },
  ],
})
export class UserModule {}
