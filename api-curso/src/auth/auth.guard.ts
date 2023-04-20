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
      this.jwtService.verify(token, {secret: configSistema.jwt.secret})
      return true;
    }catch(e){
      console.log(e)
      return false;
    }
  
  }

  recuperarTokenDeCabecera(request: Request){
    const cabeceras: any = request.headers
    const token = cabeceras.authorization?.split(' ')[1]
    return token;
  }
}
