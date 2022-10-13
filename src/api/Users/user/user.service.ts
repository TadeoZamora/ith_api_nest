import { User } from './../../../models/User';
import { User as UserEntity } from '../../../entities/user.entity' 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userEntity : Repository<UserEntity>
    ){ 
        //constructor
    }
    private readonly Users: User[] = []

    async create( user : User ){
        // this.Users.push(user)
        return await this.userEntity.insert(user);
    }

    getAll() : User[]{
        return this.Users
    }

    getByEmail(correo : string) : User{
        return this.Users.find( (user) => user.correo === correo )
    }

    updateUserById(id : number, user : User) : boolean {
        let user_index = this.Users.findIndex( (user) => user.id === id )
        if( this.userExists(id) ){
            //mantener los datos que no se van a actualizar
            const new_user = Object.assign(this.Users[user_index], user)
            this.Users[user_index] = new_user
            return true
        }
        return false
    }
    /**
     * @description Esta funcion verifica si un usuario existe o no.
     * @param id id del usuario que queremos verificar si existe
     * @returns true si el usuario existe o false si no existe
     */
    userExists(id : number) : boolean{
        const index = this.Users.findIndex( usuario => usuario.id === id)
        return index !== -1
    }
}
    