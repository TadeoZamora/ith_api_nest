import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Details } from 'src/entities/details.entity';
import { IDetails } from 'src/models/Sales';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {
    constructor( @InjectRepository(Details) private detailsEntity : Repository< Details > ){

    }
    async crear_detalle(id_sales : number,detalles : IDetails[]){

        detalles.forEach((element : IDetails) => {
            // this.detailsEntity.insert(element)
            this.detailsEntity.insert( {
                product : element.product,
                unit_price : element.unit_price,
                quantity : element.quantity,
                id_sales : id_sales
            } )
        });
    }
}
