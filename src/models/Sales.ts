export interface ISales{
    id_user : number
    details : IDetails[]
}

export interface IDetails{
    product : string
    quantity : number
    unit_price : number
}