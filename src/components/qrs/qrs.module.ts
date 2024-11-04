import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrsService } from './qrs.service';
import { QrsController } from './qrs.controller';
import { QRs } from './entities/qrs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QRs])],
  controllers: [QrsController],
  providers: [QrsService],
  exports: [QrsService],
})
export class QrsModule {}
