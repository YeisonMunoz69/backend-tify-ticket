import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Si no hay roles específicos requeridos, permitimos el acceso
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Verificamos si el usuario está presente en la solicitud
    if (!user) {
      console.log('Usuario no encontrado en la solicitud');
      throw new UnauthorizedException('Usuario no autenticado.');
    }

    // Mostramos en consola el rol del usuario y los roles requeridos (para depuración)
    console.log('Rol del usuario:', user.rol);
    console.log('Roles requeridos:', requiredRoles);

    // Verificamos si el usuario tiene uno de los roles requeridos
    const hasRole = requiredRoles.includes(user.rol);
    if (!hasRole) {
      throw new UnauthorizedException('Rol insuficiente para esta operación.');
    }

    return true;
  }
}
