import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { QRs } from '../../qrs/entities/qrs.entity';
import { UserLogin } from '../../userLogin/entities/user.entity';
import { Admin } from '../../admin/entities/admin.entity';

@Entity('logs')
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserLogin, (user) => user.logs, { nullable: true })
  user: UserLogin;

  @ManyToOne(() => Admin, (admin) => admin.logs, { nullable: true })
  admin: Admin;

  @ManyToOne(() => QRs, (qr) => qr.logRecords)
  qr: QRs;

  @CreateDateColumn()
  fechaIngreso: Date;

  @Column()
  action: string;

  @Column({ type: 'text', nullable: true }) // Texto legible para almacenar información adicional
  logs: string;
}
