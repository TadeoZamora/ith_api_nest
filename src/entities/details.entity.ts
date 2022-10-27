import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Details{
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    product : string
    @Column()
    quantity : number
    @Column()
    unit_price : number
    @Column({ default : 0 })
    id_sales : number
}