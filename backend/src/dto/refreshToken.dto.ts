import { IsNotEmpty, IsString } from 'class-validator';

export class TokenDto {
  @IsString() @IsNotEmpty()
  readonly accessToken: string;
  @IsString() @IsNotEmpty()
  readonly refreshToken: string;
}
