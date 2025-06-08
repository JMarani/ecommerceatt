import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Livro } from '../livro/livro.entity';

@Entity('autores')
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  nacionalidade: string;

  @OneToMany(() => Livro, livro => livro.autor)
  livros: Livro[];
}
