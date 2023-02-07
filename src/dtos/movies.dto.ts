import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  public title: string;

  @IsNumber()
  public year: number;

  @IsString()
  public type: string;

  @IsString()
  public poster: string;

  @IsString()
  public link: string;
}
