import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Livro } from '../livro/livro.entity';

@Entity('editoras')
export class Editora {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cidade: string;

  @OneToMany(() => Livro, livro => livro.editora)
  livros: Livro[];
}
