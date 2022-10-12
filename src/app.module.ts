import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/user/user.controller';
import { UserService } from './users/user/user.service';
import { UserModule } from './Users/user/user.module';

@Module({
  imports: [Connection, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
