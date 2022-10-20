import { IDetails, ISales } from './../../models/Sales';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Details } from 'src/entities/details.entity';
import { Sales } from 'src/entities/sales.entity';

@Injectable()
export class DetailsService {
    constructor( @InjectRepository(Details,)
     private detailsRepo : Repository< Details >,
     @InjectRepository(Sales)
     private salesRepo : Repository< Sales > ){
    }

    async create( data : any ){
        const sales = await this.salesRepo.findOne(data.id)
        if(!sales){ throw new NotFoundException('sale not found')}
        const newDetails = new Details();
        newDetails.sales = sales;
        newDetails.id_sales = data.id_sales
        return await this.detailsRepo.save(newDetails);
    }

}