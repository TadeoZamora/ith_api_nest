import { User } from './../../models/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly Users: User[] = []

    create( user : User ): void{
        this.Users.push(user)
    }

    getAll() : User[]{
        return this.Users
    }

    getByEmail(correo : string) : User{
        return this.Users.find( (user) => user.correo === correo )
    }

    updateUserById(id : number, user : User) : boolean {
        let user_index = this.Users.findIndex( (user) => user.id === id )
        if(user_index !== -1 ){
            //mantener los datos que no se van a actualizar
            this.Users[user_index] = {
                id : user.id,
                nombre : user.nombre,
                correo : user.correo,
                telefono : user.telefono
            }
            return true
        }
        return false
    }
}
