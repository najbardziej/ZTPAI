import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from 'src/schemas/game.schema';
import { UsersService } from 'src/users/users.service';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Game.name, schema: GameSchema},
      { name: User.name, schema: UserSchema}
    ])
  ],
  providers: [GamesService, UsersService],
  controllers: [GamesController]
})
export class GamesModule { }
