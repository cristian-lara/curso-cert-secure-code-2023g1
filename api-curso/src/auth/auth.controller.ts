import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Get('login/:usuario/:password')
    login(
        @Param('usuario') usuario: string,
        @Param('password') password: string
    ){
        
        return this.authService.login(usuario,password)
    }
}
