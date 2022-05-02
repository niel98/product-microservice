import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductDto } from 'src/dtos/updateProductDto.dto';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product> 
    )
    {}

    async handleCreateProduct(data: any) {
        try {
            //Check if product exist
            
            const res = this.productRepository.create(data)
            return await this.productRepository.save(res);
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    handleGetAllProducts() {
        try {
            return this.productRepository.find();
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleUpdateProduct(data: UpdateProductDto) {
        try {

            const item = this.productRepository.findByIds(data.id)
            if (!item) throw new Error('Product does not exist')

            return await this.productRepository.update(data.id, data);
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleDeleteProduct(id: any) {
        try {

            const item = this.productRepository.findByIds(id);
            if (!item) throw new Error('Product does not exist')

            return await this.productRepository.delete(id);
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

}
