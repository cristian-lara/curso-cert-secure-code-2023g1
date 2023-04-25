import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';
import { PermissionsGuard } from './permissions/permissions.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['leer:autor', 'crear:autor'])
  @Get('autor')
  getAutor(): string {
    return this.appService.getAutor();
  }

  @Get('libro')
  getLibro(): string {
    return this.appService.getLibro();
  }
}

