import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sales{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    date : Date;

    @Column()
    total : number;

    @Column()
    id_user : number
}