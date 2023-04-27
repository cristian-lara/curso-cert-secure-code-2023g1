import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auth0-cliente';

  estaLogeado = false;
  usuarioLogeado: any;

  constructor(private readonly auth0Service: AuthService){}

  ngOnInit(): void {
this.verificarUsuarioLogeado();
this.recuperarUsuario()
  }


login(){
  this.auth0Service.loginWithRedirect()
}

logout(){
  this.auth0Service.logout()
}

verificarUsuarioLogeado(){
  this.auth0Service.isAuthenticated$
  .subscribe(res => {
    console.log('res', res);
    this.estaLogeado = res
  })
}

 recuperarUsuario(){
  const usuario =  this.auth0Service.user$
  .subscribe(usuario => {
    console.log('usuario', usuario)
    this.usuarioLogeado = usuario
  })

}

}
