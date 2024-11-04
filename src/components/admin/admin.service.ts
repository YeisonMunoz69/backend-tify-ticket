import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './entities/admin.entity';
import { CreateUserLoginDto } from '../userLogin/dto/create-user.dto';
import { UserLogin } from '../userLogin/entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,

    @InjectRepository(UserLogin)
    private userLoginRepository: Repository<UserLogin>,
  ) {}

  async hasAdmins(): Promise<boolean> {
    const count = await this.adminRepository.count();
    return count > 0;
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createAdminDto.password, salt);

    const admin = this.adminRepository.create({
      ...createAdminDto,
      password: hashedPassword,
    });

    return this.adminRepository.save(admin);
  }

  // Crea y se asegura de que el usuario creado haya sido creado por un admin (no por un usuario normal)
  async createUserForAdmin(
    createUserLoginDto: CreateUserLoginDto,
  ): Promise<UserLogin> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserLoginDto.password, salt);

    const newUser = this.userLoginRepository.create({
      ...createUserLoginDto,
      password: hashedPassword, // Guardamos la contraseña encriptada
    });
    return await this.userLoginRepository.save(newUser);
  }

  //Sirve para que el admin pueda ver los usuarios que ha creado
  async findByCorreo(correo: string): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ where: { correo } });
  }
}
