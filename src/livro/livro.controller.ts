import { Controller, Delete, Get, Param } from '@nestjs/common';
import { LivroService } from './livro.service';

@Controller('livros')
export class LivroController {
  constructor(private livroService: LivroService) {}

  @Get()
  getLivros() {
    return this.livroService.getLivros();
  }

  @Get(':id')
  getLivro(@Param('id') id: string) {
    return this.livroService.getLivro(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livroService.remove(id);
  }
}
