import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean>  {
    const [req] = context.getArgs();
    const payloadAuth = req.auth;
    const permisosUsuario = payloadAuth.permissions || [];
    // ['leer:autor','crear:autor', 'leer:libro']
    console.log('request', permisosUsuario);
    return true;
  }
}
