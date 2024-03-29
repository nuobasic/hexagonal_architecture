import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../entities/user.entities';
import { Repository } from 'typeorm';
import { JwtPayload } from './jwtPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private usersRepositoyr: Repository<User>,
  ) {
    super({
      secretOrKey: 'process.env.JWT_SECRET_KEY', // token 이 유효한지 체크, token 생성할때 사용한 것과 같아야함
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload) {
    const { email, role } = payload;

    const user: User = await this.usersRepositoyr.findOne({
      where: { email, role },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
