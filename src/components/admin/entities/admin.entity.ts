import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Logs } from '../../logs/entities/logs.entity';

@Entity('admin')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  password: string;

  //Similar a los usuarios, cada administrador puede tener múltiples registros en Logs para rastrear sus acciones.
  @OneToMany(() => Logs, (logs) => logs.admin)
  logs: Logs[];
}
