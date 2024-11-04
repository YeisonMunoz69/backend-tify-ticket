import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../userLogin/user.service'; // Importamos el servicio de usuarios

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly adminService: AdminService,
    private readonly userService: UserService, // Inyectamos el servicio de usuarios
  ) {}

  // Login de administrador
  @Post('login')
  async login(@Body() body: { correo: string; password: string }) {
    const admin = await this.authService.validateAdministrador(
      body.correo,
      body.password,
    );
    if (!admin) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    return this.authService.login(admin, 'admin'); // Indicamos que es un administrador
  }

  // Login de usuario regular
  @Post('loginUser')
  async loginUser(@Body() body: { correo: string; password: string }) {
    const user = await this.authService.validateUser(
      body.correo,
      body.password,
    );
    if (!user) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    return this.authService.login(user, 'user'); // Indicamos que es un usuario regular
  }
}
