import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { configSistema } from 'src/config/config';

@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private readonly jwtService: JwtService){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.recuperarTokenDeCabecera(request);
    if(!token){
      return false;
    }
    try{
      const opcionesVerificacionJWT = {secret: configSistema.jwt.secret}
      this.jwtService.verify(token, opcionesVerificacionJWT)
      return true;
    }catch(e){
      console.log(e)
      return false;
    }
  
  }

  recuperarTokenDeCabecera(request: Request){
    const cabeceras: any = request.headers
    // separo la cabecera en un arreglo de dos elementos
    // el primer elemento es la palabra BEARER
    // el segundo elemento es el token(jwt)
    const token = cabeceras.authorization?.split(' ')[1]
    return token;
  }
}
