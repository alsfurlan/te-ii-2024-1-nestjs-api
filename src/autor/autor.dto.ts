import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { GeneroEnum } from './genero.enum';

export class AutorDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDateString()
  @IsOptional()
  dataNascimento: Date;

  @IsEnum(GeneroEnum)
  @IsOptional()
  genero: GeneroEnum;
}
