import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AutorEntity } from './autor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(AutorEntity)
    private autorRepository: Repository<AutorEntity>,
  ) {}

  findAll() {
    return this.autorRepository.find();
  }
}
