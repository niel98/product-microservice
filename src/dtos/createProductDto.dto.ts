import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    image: string

    @IsString()
    @IsNotEmpty()
    price: number
}