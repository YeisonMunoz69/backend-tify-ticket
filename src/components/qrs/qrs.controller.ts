import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { QrsService } from './qrs.service';
import { CreateQrsDto } from './dto/create-qrs.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';

@Controller('qrs')
export class QrsController {
  constructor(private readonly qrsService: QrsService) {}

  // Endpoint para crear un nuevo QR
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async createQR(@Body() createQrsDto: CreateQrsDto, @Req() req: any) {
    const user = req.user;

    if (!user || user.rol !== 'admin') {
      throw new UnauthorizedException(
        'Solo administradores pueden crear nuevos QRs.',
      );
    }

    return await this.qrsService.createQR(createQrsDto);
  }

  // Endpoint para obtener todos los QRs
  @Get()
  async findAll() {
    return await this.qrsService.findAll();
  }
}
