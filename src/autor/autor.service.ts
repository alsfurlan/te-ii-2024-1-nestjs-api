import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AutorEntity } from './autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AutorDto } from './autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(AutorEntity)
    private autorRepository: Repository<AutorEntity>,
  ) {}

  findAll() {
    return this.autorRepository.find();
  }

  async findById(id: string): Promise<AutorEntity> {
    const findOne = await this.autorRepository.findOne({ where: { id } });
    if (!findOne) {
      throw new NotFoundException('Autor não encontrado com o id ' + id);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.autorRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: AutorDto) {
    const newAutor = this.autorRepository.create(dto);
    return this.autorRepository.save(newAutor);
  }

  async update({ id, ...dto }: AutorDto) {
    await this.findById(id);
    return this.autorRepository.save({ id, ...dto });
  }
}
