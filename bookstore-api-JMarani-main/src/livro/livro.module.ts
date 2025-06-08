import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './livro.entity';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { Autor } from '../autor/autor.entity';
import { Editora } from '../editora/editora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Livro, Autor, Editora])],
  controllers: [LivroController],
  providers: [LivroService],
})
export class LivroModule {}
