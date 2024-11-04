import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extraemos el token desde el header
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // Usamos la clave secreta del .env
    });
  }

  async validate(payload: any) {
    //console.log('Payload JWT:', payload); // Mostramos el payload del token en consola para depuración
    return { userId: payload.sub, correo: payload.correo, rol: payload.rol }; // Retornamos la información validada del token segun el requerimiento
  }
}
