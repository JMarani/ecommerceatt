import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLivroDto {
  @IsString() @IsNotEmpty()
  titulo: string;

  @IsInt()
  anoPublicacao: number;

  @IsString() @IsNotEmpty()
  isbn: string;

  @IsInt()
  autorId: number;

  @IsInt()
  editoraId: number;
}
