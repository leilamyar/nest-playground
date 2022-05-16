import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyListController } from './controllers/my-list/my-list.controller';
import { MyListService } from './services/my-list/my-list.service';

@Module({
  imports: [],
  controllers: [AppController, MyListController],
  providers: [AppService, MyListService],
})
export class AppModule {}
