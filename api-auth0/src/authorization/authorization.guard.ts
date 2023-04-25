import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { promisify } from 'util';
var { expressjwt: jwt } = require("express-jwt");
import { expressJwtSecret } from 'jwks-rsa';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
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
  jwksUri: process.env.AUTH0_DOMAIN + '.well-known/jwks.json',
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5
}),
audience: process.env.AUTH0_AUDIENCE,
issuer:process.env.AUTH0_DOMAIN,
algorithms: ['RS256']
  })
);

try{
await validarToken(request, reponse);
return true;
}catch(e){
  console.log('error', e)
  return false;
} 
  }
}
