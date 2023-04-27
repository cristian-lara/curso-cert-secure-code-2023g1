import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth0-cliente';



login(){
  alert('el usuario va hacer login')
}

logout(){
  alert('el usuario va salir del sistema')
}

}
