import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

    this.validateAutor(newAutor);

    return this.autorRepository.save(newAutor);
  }

  async update(autor: AutorDto) {
    await this.findById(autor.id);

    this.validateAutor(autor);

    return this.autorRepository.save(autor);
  }

  private validateAutor(autor: AutorEntity | AutorDto) {
    this.validateAutorNascimento(autor);
    // this.validateAutorLivros
  }

  private validateAutorNascimento(autor: AutorEntity) {
    const dataAtual = new Date();
    const dataNascimento = new Date(autor.dataNascimento);
    // if(
    //   dataAtual.getTime() - dataNascimento.getTime() <
    //   (1000 * 60 * 60 * 24 * 365 * 18)
    // ) {
    //   throw new BadRequestException('O autor deve ter no mínimo 18 anos')
    // }
    const diferencaAno =
      dataAtual.getUTCFullYear() - dataNascimento.getUTCFullYear();
    if (diferencaAno < 18) {
      throw new BadRequestException('O autor deve ter no mínimo 18 anos');
    } else if (diferencaAno === 18) {
      const meses =
        dataAtual.getUTCMonth() + 1 - (dataNascimento.getUTCMonth() + 1);
      if (meses < 0) {
        throw new BadRequestException(
          `O autor deve ter no mínimo 18 anos (faltam ainda ${meses * -1} mes(es))`,
        );
      } else if (dataAtual.getUTCMonth() - dataNascimento.getUTCMonth() === 0) {
        const dias = dataAtual.getUTCDate() - dataNascimento.getUTCDate();
        if (dias < 0) {
          throw new BadRequestException(
            `O autor deve ter no mínimo 18 anos (faltam ainda ${dias * -1} dia(s))`,
          );
        }
      }
    }
  }
}
