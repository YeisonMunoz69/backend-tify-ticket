import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Logs } from '../../logs/entities/logs.entity';

@Entity('userLogin')
export class UserLogin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  password: string;

  //OneToMany con Logs: Cada usuario puede tener múltiples registros en Logs, rastreando las interacciones con los QR.
  @OneToMany(() => Logs, (logs) => logs.user)
  logs: Logs[];
}
