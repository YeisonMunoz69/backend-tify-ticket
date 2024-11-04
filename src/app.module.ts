import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './config/typeorm';

import { AdminModule } from './components/admin/admin.module';
import { QrsModule } from './components/qrs/qrs.module';
import { LogsModule } from './components/logs/logs.module';
import { UserModule } from './components/userLogin/user.module';

import { AuthModule } from './components/auth/auth.module';

@Module({
  imports: [
    //Sirve para cargar la configuracion de la base de datos de forma global
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    //Se importa el modulo de TypeOrm para la conexion con la base de datos
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    //Se importan los modulos de los componentes para que sean reconocidos por la aplicacion
    AdminModule,
    QrsModule,
    LogsModule,
    UserModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
