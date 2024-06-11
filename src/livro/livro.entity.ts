import { AutorEntity } from 'src/autor/autor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('livros')
export class LivroEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  titulo: string;

  @Column({ length: 200 })
  subtitulo: string;

  @Column({ type: 'int' })
  ano: number;

  @Column({ length: 10 })
  isbn: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @Column({ name: 'num_paginas', type: 'int' })
  numeroPaginas: number;

  @Column({ type: 'double precision'})
  preco: number;

  @Column({length: 100})
  editora: string;

  @ManyToMany(() => AutorEntity, (autor) => autor.livros)
  @JoinTable({
    name: 'livros_autores',
    joinColumn: { name: 'livro_id' },
    inverseJoinColumn: { name: 'autor_id' },
  })
  autores: AutorEntity[];
}
