import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    Nombre : string

    @Column()
    Correo : string

    @Column()
    Telefono : string

    
}