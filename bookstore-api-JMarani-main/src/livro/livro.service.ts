import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from './livro.entity';
import { Autor } from '../autor/autor.entity';
import { Editora } from '../editora/editora.entity';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(Livro) private repo: Repository<Livro>,
    @InjectRepository(Autor) private autorRepo: Repository<Autor>,
    @InjectRepository(Editora) private editoraRepo: Repository<Editora>,
  ) {}

  async create(dto: CreateLivroDto) {
    const autor = await this.autorRepo.findOne({ where: { id: dto.autorId } });
    if (!autor) throw new NotFoundException(`Autor #${dto.autorId} não encontrado`);
    const editora = await this.editoraRepo.findOne({ where: { id: dto.editoraId } });
    if (!editora) throw new NotFoundException(`Editora #${dto.editoraId} não encontrada`);
    const livro = this.repo.create({
      titulo: dto.titulo,
      anoPublicacao: dto.anoPublicacao,
      isbn: dto.isbn,
      autor,
      editora,
    });
    return this.repo.save(livro);
  }

  findAll() {
    return this.repo.find({ relations: ['autor', 'editora'] });
  }

  async findOne(id: number) {
    const livro = await this.repo.findOne({ where: { id }, relations: ['autor', 'editora', 'reviews'] });
    if (!livro) throw new NotFoundException(`Livro #${id} não encontrado`);
    return livro;
  }

  async update(id: number, dto: UpdateLivroDto) {
    const livro = await this.findOne(id);
    if (dto.autorId) {
      const autor = await this.autorRepo.findOne({ where: { id: dto.autorId } });
      if (!autor) throw new NotFoundException(`Autor #${dto.autorId} não encontrado`);
      livro.autor = autor;
    }
    if (dto.editoraId) {
      const editora = await this.editoraRepo.findOne({ where: { id: dto.editoraId } });
      if (!editora) throw new NotFoundException(`Editora #${dto.editoraId} não encontrada`);
      livro.editora = editora;
    }
    Object.assign(livro, dto);
    return this.repo.save(livro);
  }

  async remove(id: number) {
    const livro = await this.findOne(id);
    return this.repo.remove(livro);
  }
}
