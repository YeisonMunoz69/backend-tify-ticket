import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// sirve para proteger las rutas de la aplicación con un token JWT
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    console.log('Request en JwtAuthGuard:', request.user); // Depuración
    return super.canActivate(context);
  }

  // Método para manejar errores en la autenticación con JWT
  handleRequest(err, user, info) {
    if (err || !user) {
      console.log('Error en JwtAuthGuard:', err || 'Usuario no autenticado');
      throw new UnauthorizedException();
    }
    return user;
  }
}
