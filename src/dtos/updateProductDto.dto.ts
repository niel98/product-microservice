import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {

    @IsNotEmpty()
    id: any
    
    @IsString()
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    image: string

    @IsNumber()
    @IsOptional()
    price: number
}