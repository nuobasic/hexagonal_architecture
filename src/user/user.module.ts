import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../entities/user.entities';
import { DeleteUserController } from './controller/delete-user.controller';
import { GetUserGontroller } from './controller/get-user.controller';
import { GetUsersController } from './controller/get-users.controller';

import { PostUsersController } from './controller/post-users.controller';
import { UpdateUserController } from './controller/update-user.controller';

import { DELETE_USER_INBOUND_PORT } from './inbound-port/delete-user-inbound.port';
import { GET_USER_INBOUND_PORT } from './inbound-port/get-user-inbound-port';
import { GET_USERS_INBOUND_PORT } from './inbound-port/get-users-inbound-port';

import { POST_USERS_INBOUND_PORT } from './inbound-port/post-users.inbound-port';
import { UPDATE_USER_INBOUND_PORT } from './inbound-port/update-user-inbound.port';

import { DeletUserepository } from './outbound-adapter/delete-user.repository';
import { FindUserRepository } from './outbound-adapter/find-user.repository';
import { GetUserRepository } from './outbound-adapter/get-user-repository';
import { GetUsersRepository } from './outbound-adapter/get-users.repository';

import { PostUsersRepository } from './outbound-adapter/post-users.repository';
import { UpdateUserRepository } from './outbound-adapter/update-user.repository';

import { DELETE_USER_OUTBOUND_PORT } from './outbound-port/delete-user-outbound.port';
import { FIND_USER_OUTBOUND_PORT } from './outbound-port/find-user-outbound-port';
import { GET_USER_OUTBOUND_PORT } from './outbound-port/get-user-outbound-port';
import { GET_USERS_OUTBOUND_PORT } from './outbound-port/get-users-outbound-port';

import { POST_USERS_OUTBOUND_PORT } from './outbound-port/post-users.outbout-port';
import { UPDATE_USER_OUTBOUND_PORT } from './outbound-port/update-user.outbound.port';

import { DeleteUserService } from './service/delete-user.service';
import { GetUserService } from './service/get-user.service';
import { GetUsersService } from './service/get-users.service';

import { PostUserservice } from './service/post-users.service';
import { UpdateUserService } from './service/update-user.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    PostUsersController,
    GetUserGontroller,
    DeleteUserController,
    GetUsersController,
    UpdateUserController,
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
    {
      provide: UPDATE_USER_INBOUND_PORT,
      useClass: UpdateUserService,
    },
    {
      provide: UPDATE_USER_OUTBOUND_PORT,
      useClass: UpdateUserRepository,
    },
    {
      provide: FIND_USER_OUTBOUND_PORT,
      useClass: FindUserRepository,
    },
  ],
  exports: [
    {
      provide: FIND_USER_OUTBOUND_PORT,
      useClass: FindUserRepository,
    },
  ],
})
export class UserModule {}
