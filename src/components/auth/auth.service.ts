import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../userLogin/user.service'; // Importamos el servicio de usuarios
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // Validar administrador
  async validateAdministrador(correo: string, password: string): Promise<any> {
    const admin = await this.adminService.findByCorreo(correo);
    if (admin && (await bcrypt.compare(password, admin.password))) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }

  // Validar usuario regular
  async validateUser(correo: string, password: string): Promise<any> {
    const user = await this.userService.findByCorreo(correo);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Login común para administradores y usuarios, asignando el rol en el payload
  async login(user: any, rol: string) {
    const payload = {
      correo: user.correo,
      sub: user.id,
      rol: rol, // Rol dinámico (admin o user)
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
