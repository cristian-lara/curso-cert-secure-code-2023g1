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

  constructor(private readonly auth0Service: AuthService){}

  ngOnInit(): void {
this.verificarUsuarioLogeado();
  }


login(){
  alert('el usuario va hacer login')
  this.auth0Service.loginWithRedirect()
}

logout(){
  alert('el usuario va salir del sistema')
}

verificarUsuarioLogeado(){
  this.auth0Service.isAuthenticated$
  .subscribe(res => {
    console.log('res', res);
    this.estaLogeado = res
  })
}

}
