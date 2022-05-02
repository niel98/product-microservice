import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProductDto } from 'src/dtos/createProductDto.dto';
import { UpdateProductDto } from 'src/dtos/updateProductDto.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private service: ProductsService
    )
    {}

    @MessagePattern({ cmd: 'create-product' })
    createProduct(data: CreateProductDto) {
        return this.service.handleCreateProduct(data);
    }

    @MessagePattern({ cmd: 'get-all-products' })
    getAllProducts() {
        return this.service.handleGetAllProducts();
    }

    @MessagePattern({ cmd: 'update-product' })
    updateProduct(data: UpdateProductDto) {
        return this.service.handleUpdateProduct(data);
    }

    @MessagePattern({ cmd: 'delete-product' })
    deleteProduct(id: any) {
        return this.service.handleDeleteProduct(id);
    }
}
