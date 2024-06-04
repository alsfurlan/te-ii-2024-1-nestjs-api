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

  @Column({ length: 100 })
  nome: string;

  @ManyToMany(() => AutorEntity, (autor) => autor.livros)
  @JoinTable({
    name: 'livros_autores',
    joinColumn: { name: 'livro_id' },
    inverseJoinColumn: { name: 'autor_id' },
  })
  autores: AutorEntity[];
}
