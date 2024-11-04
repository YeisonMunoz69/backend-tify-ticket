import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AdminModule } from '../admin/admin.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../userLogin/user.module';

@Module({
  imports: [
    AdminModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Usamos la clave secreta del archivo .env
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }, // Tiempo de expiración del token
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
