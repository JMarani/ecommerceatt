import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Autor } from '../autor/autor.entity';
import { Editora } from '../editora/editora.entity';
import { BookReview } from '../book-review/book-review.entity';

@Entity('livros')
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  anoPublicacao: number;

  @Column()
  isbn: string;

  @ManyToOne(() => Autor, autor => autor.livros)
  autor: Autor;

  @ManyToOne(() => Editora, editora => editora.livros)
  editora: Editora;

  @OneToMany(() => BookReview, review => review.livro, { cascade: true })
  reviews: BookReview[];
}
