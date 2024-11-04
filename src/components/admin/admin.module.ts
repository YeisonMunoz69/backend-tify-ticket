import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './entities/admin.entity';
import { UserLogin } from '../userLogin/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, UserLogin])],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService], // Exportamos el servicio para que pueda ser utilizado en otros módulos si es necesario
})
export class AdminModule {}
