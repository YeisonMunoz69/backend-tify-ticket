import { IsString, IsEnum, IsOptional } from 'class-validator';

// Sirve para definir los estados de un QR en la base de datos y para validar que
// el estado de un QR sea uno de los definidos en la base de datos.
export enum QRStatus {
  DESACTIVADO = 0,
  HABILITADO = 1,
  USADA = 2,
  SANCIONADA = 3,
  DUPLICADA = 4,
}

export class CreateQrsDto {
  @IsString()
  numQr: string;

  @IsEnum(QRStatus)
  status: QRStatus;

  @IsString()
  @IsOptional()
  extra?: string;
}
