import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserLogin } from './entities/user.entity';
import { QRs } from '../qrs/entities/qrs.entity';
import { LogsService } from '../logs/logs.service';
import { Logs } from '../logs/entities/logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLogin, QRs, Logs])],
  controllers: [UserController],
  providers: [UserService, LogsService],
  exports: [UserService],
})
export class UserModule {}
