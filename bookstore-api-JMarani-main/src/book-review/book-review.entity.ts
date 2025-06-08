import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Livro } from '../livro/livro.entity';

@Entity('book_reviews')
export class BookReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  comentario: string;

  @Column({ type: 'integer' })
  nota: number;

  @ManyToOne(() => Livro, livro => livro.reviews, { onDelete: 'CASCADE' })
  livro: Livro;
}
