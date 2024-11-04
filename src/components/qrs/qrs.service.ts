import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QRs } from './entities/qrs.entity';
import { CreateQrsDto } from './dto/create-qrs.dto';

@Injectable()
export class QrsService {
  constructor(
    @InjectRepository(QRs)
    private qrsRepository: Repository<QRs>,
  ) {}

  // Método para crear un nuevo QR
  async createQR(createQrsDto: CreateQrsDto): Promise<QRs> {
    const newQr = this.qrsRepository.create(createQrsDto);
    return await this.qrsRepository.save(newQr);
  }

  // Método para obtener todos los QRs
  async findAll(): Promise<QRs[]> {
    return await this.qrsRepository.find();
  }
}
