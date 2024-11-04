import {
  Controller,
  Get,
  Put,
  Param,
  UseGuards,
  Req,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateQrsDto } from '../qrs/dto/update-qrs.dto';
import { LogsService } from '../logs/logs.service';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logsService: LogsService,
  ) {}

  @Get('checkTicket/:numQr')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async checkTicket(@Param('numQr') numQr: string, @Req() req: any) {
    const user = req.user;

    if (!user) {
      throw new UnauthorizedException('Usuario no autenticado.');
    }

    // Verificar el estado del QR
    const qrData = await this.userService.checkTicket(numQr);

    // Registrar la acción en la tabla de logs
    await this.logsService.createLog({
      idUserLogin: user.id,
      idQr: qrData.id,
      action: 'view',
      logs: JSON.stringify(qrData),
    });

    return qrData;
  }

  // Sirve para actualizar el estado de un QR en la base de datos y registrar el cambio en los logs de la tabla QRs
  @Put('updateTicket/:numQr')
  @UseGuards(JwtAuthGuard)
  async updateTicket(
    @Param('numQr') numQr: string,
    @Body() updateQrsDto: UpdateQrsDto,
    @Req() req: any,
  ) {
    const user = req.user;

    if (!user) {
      throw new UnauthorizedException('Usuario no autenticado.');
    }

    // Actualizar el estado del QR
    const updatedQr = await this.userService.updateTicket(numQr, updateQrsDto);

    // Registrar el cambio en los logs de la tabla QRs
    await this.userService.appendToQrLogs(numQr, updateQrsDto);

    return updatedQr;
  }
}
