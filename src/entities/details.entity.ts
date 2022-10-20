import { Entity, Column, PrimaryGeneratedColumn,JoinColumn, ManyToOne } from 'typeorm';
import { Sales } from './sales.entity';

@Entity()
export class Details{

    @PrimaryGeneratedColumn()
    id_sales : number;

    @Column()
    product : string;
    
    @Column()
    quantity : number;

    @Column()
    unit_price : number;


    @ManyToOne(()=> Sales, (sales) => sales.details)
    @JoinColumn({ name: 'id_sales'})
    sales: Sales;
}