import { UnitOfWorkModule } from './share/unitofwork/unitofwork.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UnitOfWorkModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
