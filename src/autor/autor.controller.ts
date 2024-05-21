import { Controller, Get } from '@nestjs/common';
import { AutorService } from './autor.service';

@Controller('autores')
export class AutorController {
  constructor(private autorService: AutorService) {}

  @Get()
  findAll() {
    return this.autorService.findAll();
  }
}
