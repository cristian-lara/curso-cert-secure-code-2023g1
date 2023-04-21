import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { promisify } from 'util';
var { expressjwt: jwt } = require("express-jwt");
import { expressJwtSecret } from 'jwks-rsa';
@Injectable()
export class AuthorizationGuard implements CanActivate {
 async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {

const request = context.getArgByIndex(0);
const reponse = context.getArgByIndex(1);
const validarToken = promisify(
  jwt({
secret : expressJwtSecret({
  jwksUri:'https://dev2023g1.us.auth0.com/.well-known/jwks.json',
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5
}),
audience: 'nestjs',
issuer:'https://dev2023g1.us.auth0.com/',
algorithms: ['RS256']
  })
);


try{
await validarToken(request, reponse);
return true;
}catch(e){
  return false;
} 
  }
}
