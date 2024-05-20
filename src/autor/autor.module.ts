import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutorEntity])],
})
export class AutorModule {}
