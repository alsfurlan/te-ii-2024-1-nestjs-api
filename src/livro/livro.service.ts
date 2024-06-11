import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LivroEntity } from './livro.entity';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(LivroEntity)
    private repository: Repository<LivroEntity>,
  ) {}

  getLivros() {
    return this.repository.find({
      relations: {
        autores: true,
      },
    });
  }

  async getLivro(id: string) {
    const findOne = await this.repository.findOne({
      where: { id },
      relations: { autores: true },
    });
    if (!findOne) {
      throw new NotFoundException('Livro não encontrado com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.getLivro(id);
    await this.repository.remove(findById);
    return { ...findById, id };
  }
}
