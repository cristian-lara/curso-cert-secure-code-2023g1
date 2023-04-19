import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    private users = [
        {
            id: 1,
            nombre: 'Persona 1',
            password: 'abc'
        },
        {
            id: 2,
            nombre: 'Persona 2',
            password: 'abc'
        }
    ]

    encontrarUno(nombre: string) {
        return this.users.find( user => user.nombre === nombre);
    }

    listarTodos(){
        return this.users;
    }
}
