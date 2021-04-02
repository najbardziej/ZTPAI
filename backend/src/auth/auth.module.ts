import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [UsersModule, PassportModule, JwtModule.registerAsync({
    useFactory: async () => ({
      secretOrPrivateKey: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.EXPIRES_IN }
    })
  })],
  exports: [AuthService]
})
export class AuthModule { }