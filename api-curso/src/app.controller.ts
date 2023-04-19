import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('principal')
export class AppController {
  constructor(private readonly appService: AppService) {}

 // /principal/obtner-mensaje
  @Get('obtner-mensaje')
  getHello(): string {
    return this.appService.getHello();
  }
// pincipal/
  @Post()
  guardar() {
    return 'guardar'
  }
}
