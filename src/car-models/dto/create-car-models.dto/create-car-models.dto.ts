import { IsString } from 'class-validator';
import { IsBoolean } from 'class-validator';

export class CreateCarModelsDto {
  @IsString()
  readonly Name: string;
  @IsString()
  readonly Type: string;
  @IsString()
  readonly fuel: string;
  @IsBoolean()
  readonly Quattro: boolean;
}
