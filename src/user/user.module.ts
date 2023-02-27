import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entities';
import { GetUserGontroller } from './controller/get-user.controller';
import { GetUsersController } from './controller/get-users.controller';
import { PostUsersController } from './controller/post-users.controller';
import { GET_USER_INBOUND_PORT } from './inbound-port/get-user-inbound-port';
import { GET_USERS_INBOUND_PORT } from './inbound-port/get-users.inbound.port';
import { POST_USERS_INBOUND_PORT } from './inbound-port/post-users.inbound-port';
import { GetUserRepository } from './outbound-adapter/ger-user-repository';
import { GetUsersRepository } from './outbound-adapter/get-users.repository';
import { PostUsersRepository } from './outbound-adapter/post-users.repository';
import { GET_USER_OUTBOUND_PORT } from './outbound-port/get-user-outbound-port';
import { GET_USERS_OUTBOUND_PORT } from './outbound-port/get-users.outboubd-port';
import { POST_USERS_OUTBOUND_PORT } from './outbound-port/post-users.outbout-port';
import { GetUserService } from './service/get-user.service';
import { GetUsersService } from './service/get-users.service';
import { PostUserservice } from './service/post-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PostUsersController, GetUsersController, GetUserGontroller],
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
      provide: GET_USERS_INBOUND_PORT,
      useClass: GetUsersService,
    },
    {
      provide: GET_USERS_OUTBOUND_PORT,
      useClass: GetUsersRepository,
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
