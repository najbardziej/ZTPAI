import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }

  async register(userData:any): Promise<any> {
    return await this.usersService.create(userData);
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.userId};

    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
