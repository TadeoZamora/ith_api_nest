import { IDetails } from "src/models/Sales";
import { Body, Controller, Post } from '@nestjs/common';
import { DetailsService } from "./details.service";

@Controller('details')
export class DetailsController {
    constructor( private detailsService : DetailsService){

    }

    @Post()
    Create(@Body() params : IDetails){
        try{
            return this.detailsService.create(params)
        }catch(error){
            console.log(error)
        }
    }
}