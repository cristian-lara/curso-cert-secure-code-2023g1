import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {


    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService){}

    login(usuario: string, password: string){

        const usuarioEncontrado = this.userService.encontrarUno(usuario);

        if(!usuarioEncontrado){
            throw new NotFoundException({mensaje: 'El usuario no se encuentra registrado'});
        }

        if(usuarioEncontrado.password !== password){
            throw new UnauthorizedException({mensaje: 'Credenciales inválidas'})
        }

        const payloadJWT = {
            nombreUsuario: usuarioEncontrado.nombre, 
            sub: usuarioEncontrado.id, 
            ciudad: 'Quito' 
        }

        return {
            access_token: this.jwtService.sign(payloadJWT)
        };

    }


}
