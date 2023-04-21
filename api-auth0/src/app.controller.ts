import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthorizationGuard)
  @Get('autor')
  getAutor(): string {
    return this.appService.getAutor();
  }

  @Get('libro')
  getLibro(): string {
    return this.appService.getLibro();
  }
}

