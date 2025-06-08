import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from '../livro/livro.entity';
import { BookReview } from './book-review.entity';
import { CreateBookReviewDto } from './dto/create-book-review.dto';
import { UpdateBookReviewDto } from './dto/update-book-review.dto';

@Injectable()
export class BookReviewService {
  constructor(
    @InjectRepository(BookReview)
    private repo: Repository<BookReview>,
    @InjectRepository(Livro)
    private livroRepo: Repository<Livro>,
  ) {}

  async create(dto: CreateBookReviewDto) {
    const livro = await this.livroRepo.findOne({ where: { id: dto.livroId } });
    if (!livro) throw new NotFoundException(`Livro #${dto.livroId} não encontrado`);
    const review = this.repo.create({
      comentario: dto.comentario,
      nota: dto.nota,
      livro,
    });
    return this.repo.save(review);
  }

  findAll() {
    return this.repo.find({ relations: ['livro'] });
  }

  async findOne(id: number) {
    const review = await this.repo.findOne({ where: { id }, relations: ['livro'] });
    if (!review) throw new NotFoundException(`Review #${id} não encontrada`);
    return review;
  }

  async update(id: number, dto: UpdateBookReviewDto) {
    const review = await this.findOne(id);
    Object.assign(review, dto);
    return this.repo.save(review);
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    return this.repo.remove(review);
  }
}
