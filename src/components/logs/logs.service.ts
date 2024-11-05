import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logs } from './entities/logs.entity';
import { CreateLogsDto } from './dto/create-logs.dto';
import { QRs } from '../qrs/entities/qrs.entity';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Logs)
    private logsRepository: Repository<Logs>,

    @InjectRepository(QRs)
    private qrsRepository: Repository<QRs>,
  ) {}

  // Método para crear un nuevo log en formato de texto legible
  async createLog(createLogsDto: CreateLogsDto): Promise<Logs> {
    const qr = await this.qrsRepository.findOne({
      where: { id: createLogsDto.idQr },
    });
    if (!qr) {
      throw new Error(`QR con id ${createLogsDto.idQr} no encontrado.`);
    }

    const logEntry = this.logsRepository.create({
      user: createLogsDto.idUserLogin
        ? { id: createLogsDto.idUserLogin }
        : null,
      admin: createLogsDto.idAdmin ? { id: createLogsDto.idAdmin } : null,
      qr: { id: createLogsDto.idQr },
      action: createLogsDto.action,
      logs: `QR Info: numQr=${qr.numQr}, status=${qr.status}, extra=${qr.extra || 'N/A'}`, // Texto legible
    });

    return await this.logsRepository.save(logEntry);
  }

  // Método para obtener todos los logs
  async findAll(): Promise<Logs[]> {
    return await this.logsRepository.find({
      relations: ['user', 'admin', 'qr'],
    });
  }
}
