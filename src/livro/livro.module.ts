import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LivroEntity } from "./livro.entity";
import { LivroController } from "./livro.controller";
import { LivroService } from "./livro.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([LivroEntity])
  ],
  controllers: [LivroController],
  providers: [LivroService]
})
export class LivroModule {}
