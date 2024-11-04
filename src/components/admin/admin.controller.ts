import {
  Controller,
  Post,
  Body,
  UseGuards,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateUserLoginDto } from '../userLogin/dto/create-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Ruta para el registro del primer administrador
  @Post('primer-registro')
  async registerFirstAdmin(@Body() createAdminDto: CreateAdminDto) {
    const hasAdmins = await this.adminService.hasAdmins();

    if (hasAdmins) {
      throw new UnauthorizedException(
        'Ya existe un administrador. Usa la ruta regular para crear más administradores.',
      );
    }

    return this.adminService.createAdmin(createAdminDto);
  }

  // Ruta para que el administrador cree nuevos usuarios regulares
  @Post('newUserForAdmin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin') // Verifica que el rol sea "admin"
  async newUserForAdmin(
    @Body() createUserLoginDto: CreateUserLoginDto,
    @Req() req: any,
  ) {
    if (!req.user || req.user.rol !== 'admin') {
      throw new UnauthorizedException(
        'Solo administradores pueden crear nuevos usuarios.',
      );
    }

    return this.adminService.createUserForAdmin(createUserLoginDto);
  }
}
