import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('autor')
  getAutor(): string {
    return this.appService.getAutor();
  }

  @Get('libro')
  getLibro(): string {
    return this.appService.getLibro();
  }
}

