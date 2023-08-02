import {
  IsEmail,
  IsDateString,
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  Max,
} from 'class-validator';
import { Gender, YesOrNo } from '../entities/user.entity';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNumber()
  @IsPositive()
  @Max(999999999)
  identification: number;

  @IsString()
  nombre: string;
  @IsString()
  apellido: string;

  @IsNumber()
  @IsPositive()
  @Max(9999999)
  numero: number;

  @IsString()
  departamento: string;

  @IsString()
  ciudad: string;

  @IsDateString()
  fechaDeNacimiento: Date;

  @IsEnum(YesOrNo)
  hijos: string;

  @IsEnum(Gender)
  genero: string;
}
