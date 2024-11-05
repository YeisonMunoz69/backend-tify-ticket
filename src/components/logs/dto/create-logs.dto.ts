import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateLogsDto {
  @IsNumber()
  @IsOptional()
  idUserLogin?: number;

  @IsNumber()
  @IsOptional()
  idAdmin?: number;

  @IsNumber()
  idQr: number;

  @IsString()
  action: string;

  @IsString()
  @IsOptional()
  logs?: string;
}
