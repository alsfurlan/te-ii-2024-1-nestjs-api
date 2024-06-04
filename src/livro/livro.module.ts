import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LivroEntity } from "./livro.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([LivroEntity])
  ],
})
export class LivroModule {}
