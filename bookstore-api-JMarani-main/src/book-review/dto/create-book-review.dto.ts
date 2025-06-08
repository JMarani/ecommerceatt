import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateBookReviewDto {
  @IsString() @IsNotEmpty()
  comentario: string;

  @IsInt() @Min(1) @Max(5)
  nota: number;

  @IsInt()
  livroId: number;
}
