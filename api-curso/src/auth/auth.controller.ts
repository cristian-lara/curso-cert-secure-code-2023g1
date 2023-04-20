import { Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('login/:usuario/:password')
    login(
        @Param('usuario') usuario: string,
        @Param('password') password: string
    ){
        
        return this.authService.login(usuario,password)
    }
}
