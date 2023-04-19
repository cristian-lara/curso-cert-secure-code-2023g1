import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {


    constructor(private readonly userService: UserService){}

    login(usuario: string, password: string){

        const usuarioEncontrado = this.userService.encontrarUno(usuario);

        if(!usuarioEncontrado){
            throw new UnauthorizedException({mensaje: 'El usuario no esta autorizado'});
        }

        return {usuarioEncontrado,usuario,password};

    }


}
