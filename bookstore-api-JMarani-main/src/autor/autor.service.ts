import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './autor.entity';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {
  constructor(@InjectRepository(Autor) private repo: Repository<Autor>) {}

  create(dto: CreateAutorDto) {
    const autor = this.repo.create(dto);
    return this.repo.save(autor);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const autor = await this.repo.findOne({ where: { id } });
    if (!autor) throw new NotFoundException(`Autor #${id} não encontrado`);
    return autor;
  }

  async update(id: number, dto: UpdateAutorDto) {
    const autor = await this.findOne(id);
    Object.assign(autor, dto);
    return this.repo.save(autor);
  }

  async remove(id: number) {
    const autor = await this.findOne(id);
    return this.repo.remove(autor);
  }
}
