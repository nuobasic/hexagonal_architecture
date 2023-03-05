import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entities';
import { DeleteUserController } from './controller/delete-user.controller';
import { GetUserGontroller } from './controller/get-user.controller';
import { GetUsersController } from './controller/get-users.controller';

import { PostUsersController } from './controller/post-users.controller';

import { DELETE_USER_INBOUND_PORT } from './inbound-port/delete-user-inbound.port';
import { GET_USER_INBOUND_PORT } from './inbound-port/get-user-inbound-port';
import { GET_USERS_INBOUND_PORT } from './inbound-port/get-users-inbound-port';

import { POST_USERS_INBOUND_PORT } from './inbound-port/post-users.inbound-port';

import { DeletUserepository } from './outbound-adapter/delete-user.repository';
import { GetUserRepository } from './outbound-adapter/get-user-repository';
import { GetUsersRepository } from './outbound-adapter/get-users.repository';

import { PostUsersRepository } from './outbound-adapter/post-users.repository';

import { DELETE_USER_OUTBOUND_PORT } from './outbound-port/delete-user-outbound.port';
import { GET_USER_OUTBOUND_PORT } from './outbound-port/get-user-outbound-port';
import { GET_USERS_OUTBOUND_PORT } from './outbound-port/get-users-outbound-port';

import { POST_USERS_OUTBOUND_PORT } from './outbound-port/post-users.outbout-port';

import { DeleteUserService } from './service/delete-user.service';
import { GetUserService } from './service/get-user.service';
import { GetUsersService } from './service/get-users.service';

import { PostUserservice } from './service/post-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    PostUsersController,
    GetUserGontroller,
    DeleteUserController,
    GetUsersController,
  ],
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
    {
      provide: DELETE_USER_INBOUND_PORT,
      useClass: DeleteUserService,
    },
    {
      provide: DELETE_USER_OUTBOUND_PORT,
      useClass: DeletUserepository,
    },
    {
      provide: GET_USERS_INBOUND_PORT,
      useClass: GetUsersService,
    },
    {
      provide: GET_USERS_OUTBOUND_PORT,
      useClass: GetUsersRepository,
    },
  ],
})
export class UserModule {}
