import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'no poner nunca aqui el secreto quemado',
      signOptions: {
        expiresIn: '3600s'
      }
    })
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {

  constructor(){
    const puertoBasedeDats= process.env.DB_PORT;
    console.log('Mi varible de entorno es la siguiente', process.env.SECRET_JWT )
    console.log('Mi varible de entorno puerto de la BD es la siguiente', process.env.SECRET_JWT )
  console.log('tipo de varible del puerto', typeof Number(puertoBasedeDats), puertoBasedeDats)
  console.log('el ambiente es prod?', process.env.PROD)
  }
}
