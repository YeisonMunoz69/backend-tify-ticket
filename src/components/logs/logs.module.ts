import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { Logs } from './entities/logs.entity';
import { QRs } from '../qrs/entities/qrs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Logs, QRs])],
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsService],
})
export class LogsModule {}
