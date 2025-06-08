import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Editora } from './editora.entity';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';

@Injectable()
export class EditoraService {
  constructor(@InjectRepository(Editora) private repo: Repository<Editora>) {}

  create(dto: CreateEditoraDto) {
    const editora = this.repo.create(dto);
    return this.repo.save(editora);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const editora = await this.repo.findOne({ where: { id } });
    if (!editora) throw new NotFoundException(`Editora #${id} não encontrada`);
    return editora;
  }

  async update(id: number, dto: UpdateEditoraDto) {
    const editora = await this.findOne(id);
    Object.assign(editora, dto);
    return this.repo.save(editora);
  }

  async remove(id: number) {
    const editora = await this.findOne(id);
    return this.repo.remove(editora);
  }
}
