import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('usuario')
export class UserController {

    constructor(private readonly userService: UserService){}
   
    @UseGuards(AuthGuard)
    @Get('lista')
    getTodos() {
      return this.userService.listarTodos();
    }

    @UseGuards(AuthGuard)
    @Get()
    getUsuarioPorNombre() {
      return this.userService.encontrarUno('Persona 2');
    }

  
}
