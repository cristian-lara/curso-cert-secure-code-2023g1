import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean>  {
    const [req] = context.getArgs();
    const payloadAuth = req.auth;
    const permisosUsuariodeAutho0 = ['leer:autor', 'permisos inventado'];
    // ['leer:autor','crear:autor', 'leer:libro']
    console.log('request', permisosUsuariodeAutho0);
    const permisosDeControlador = this.reflector.get('permissions', context.getHandler()) || [];
    console.log('permisos de controlador', permisosDeControlador);
    const tienePermisosElUsuario = permisosDeControlador.every(
      permisosControlador => permisosUsuariodeAutho0.includes(permisosControlador)
    )
    console.log('tienen permisos el usuario', tienePermisosElUsuario);

    if(permisosUsuariodeAutho0.length === 0){
      throw new UnauthorizedException();
    }
    return true;
  }
}
