import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entities';
import { JwtModule } from '@nestjs/jwt';
import { UserLoginController } from './controller/user-login.controller';
import { USER_LOGIN_INBOUND_PORT } from './inbound-port/user-login-inbound-port';
import { UserLoginService } from './service/user-login.service';

import { FIND_USER_OUTBOUND_PORT } from '../user/outbound-port/find-user-outbound-port';
import { FindUserRepository } from '../user/outbound-adapter/find-user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'process.env.JWT_SECRET_KEY',
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [UserLoginController],
  providers: [
    {
      provide: USER_LOGIN_INBOUND_PORT,
      useClass: UserLoginService,
    },

    {
      provide: FIND_USER_OUTBOUND_PORT,
      useClass: FindUserRepository,
    },
  ],
})
export class AuthModule {}
