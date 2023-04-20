import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { configSistema } from './config/config';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: configSistema.jwt.secret,
      signOptions: {
        expiresIn: configSistema.jwt.expireTime
      }
    })
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {

  constructor(){
    const puertoBasedeDats= process.env.DB_PORT;
    console.log('configuracion: ', configSistema.dbRelacional.hostname)
  }
}
