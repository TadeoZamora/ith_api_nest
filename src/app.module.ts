import { DetailsService } from './api/details/details.service';
import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/Users/user/user.module';
import { SalesModule } from './api/Sales/sales.module';

@Module({
  imports: [Connection, UserModule, SalesModule],
  controllers: [AppController],
  providers: [
    DetailsService, AppService],
})
export class AppModule { }
