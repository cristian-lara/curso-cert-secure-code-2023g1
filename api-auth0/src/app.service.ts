import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAutor(): string {
    return 'Me entrega todos los autores';
  }

  getLibro(): string {
    return 'Me entrega todos los libros';
  }
}
