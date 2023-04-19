import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('usuario')
export class UserController {

    constructor(private readonly userService: UserService){}
   
    @Get('lista')
    getTodos() {
      return this.userService.listarTodos();
    }

    @Get()
    getUsuarioPorNombre() {
      return this.userService.encontrarUno('Persona 2');
    }

  
}
