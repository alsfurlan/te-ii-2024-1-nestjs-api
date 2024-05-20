import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'autores' })
export class AutorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;
}
