import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Logs } from '../../logs/entities/logs.entity';

@Entity('qrs')
export class QRs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  numQr: string;

  @CreateDateColumn()
  fechaCreacion: Date;

  @Column({ type: 'enum', enum: [0, 1, 2, 3, 4], default: 0 })
  status: number;

  @Column({ nullable: true })
  extra: string;

  @Column({ type: 'text', nullable: true })
  logs: string; // Esta columna almacena el historial de cambios en formato JSON concatenado

  @OneToMany(() => Logs, (log) => log.qr)
  logRecords: Logs[]; // Esta propiedad representa la relación OneToMany con la entidad Logs
}
