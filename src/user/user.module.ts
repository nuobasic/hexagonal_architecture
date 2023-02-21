import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entities';
import { GetUsersController } from './controller/get-users.controller';
import { PostUsersController } from './controller/post-users.controller';
import { GET_USERS_INBOUND_PORT } from './inbound-port/get-users.inbound.port';
import { POST_USERS_INBOUND_PORT } from './inbound-port/post-users.inbound-port';
import { GetUsersRepository } from './outbound-adapter/get-users.repository';
import { PostUsersRepository } from './outbound-adapter/post-users.repository';
import { GET_USERS_OUTBOUND_PORT } from './outbound-port/get-users.outboubd-port';
import { POST_USERS_OUTBOUND_PORT } from './outbound-port/post-users.outbout-port';
import { GetUsersService } from './service/get-users.service';
import { PostUserservice } from './service/post-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PostUsersController, GetUsersController],
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
  ],
})
export class UserModule {}
