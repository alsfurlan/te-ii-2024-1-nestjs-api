import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';
import { LivroEntity } from 'src/livro/livro.entity';

@Entity({ name: 'autores' })
export class AutorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'date', name: 'data_nascimento', nullable: true })
  dataNascimento: Date;

  @Column({
    type: 'enum',
    enum: GeneroEnum,
    default: GeneroEnum.INDEFINIDO,
    nullable: true,
  })
  genero: GeneroEnum;

  @ManyToMany(() => LivroEntity, (livro) => livro.autores)
  livros: LivroEntity[]
}
