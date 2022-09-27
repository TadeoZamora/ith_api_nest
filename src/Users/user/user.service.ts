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
}
