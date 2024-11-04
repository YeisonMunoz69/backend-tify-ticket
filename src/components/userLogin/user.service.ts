import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QRs } from '../qrs/entities/qrs.entity';
import { UpdateQrsDto } from '../qrs/dto/update-qrs.dto';
import { UserLogin } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserLogin)
    private userLoginRepository: Repository<UserLogin>,

    @InjectRepository(QRs)
    private qrsRepository: Repository<QRs>,
  ) {}

  // Método para buscar un usuario por su correo. Retorna los datos del usuario si existe.
  async findByCorreo(correo: string): Promise<UserLogin | undefined> {
    return this.userLoginRepository.findOne({ where: { correo } });
  }

  // Método para verificar el estado de un QR. Busca un QR específico por su número (numQr) y retorna sus datos si existe. // !No por su iD
  async checkTicket(numQr: string): Promise<QRs> {
    const qr = await this.qrsRepository.findOne({ where: { numQr } });
    if (!qr) {
      throw new NotFoundException(`QR con número ${numQr} no encontrado.`);
    }
    return qr;
  }

  // Método para actualizar el estado de un QR. Cambia el estado de un QR, llama a appendToQrLogs para registrar
  // el cambio en el historial, y guarda el QR actualizado.
  async updateTicket(numQr: string, updateQrsDto: UpdateQrsDto): Promise<QRs> {
    const qr = await this.qrsRepository.findOne({ where: { numQr } });
    if (!qr) {
      throw new NotFoundException(`QR con número ${numQr} no encontrado.`);
    }
    qr.status = updateQrsDto.status;
    await this.appendToQrLogs(numQr, updateQrsDto); // Agregar el nuevo estado en los logs
    return await this.qrsRepository.save(qr);
  }

  // Método para concatenar los datos de logs en un QR específico.
  // TODO:Toma un nuevo registro en formato JSON string y lo concatena en la columna logs de la entidad QRs para mantener el historial de cambios.
  async appendToQrLogs(
    numQr: string,
    updateQrsDto: UpdateQrsDto,
  ): Promise<void> {
    const qr = await this.qrsRepository.findOne({ where: { numQr } });
    if (!qr) {
      throw new NotFoundException(`QR con número ${numQr} no encontrado.`);
    }

    const newLogEntry = `Status actualizado a "${updateQrsDto.status}" el ${new Date().toISOString()}, comentario adicional: ${updateQrsDto.extra || 'N/A'}`;

    qr.logs = qr.logs ? `${qr.logs} | ${newLogEntry}` : newLogEntry; // Concatenar como texto legible
    await this.qrsRepository.save(qr);
  }
}
