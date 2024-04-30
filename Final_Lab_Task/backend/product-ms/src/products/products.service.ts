import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { ILike, Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductEntity) private readonly productRepo: Repository<ProductEntity>) { }

    async getAllProduct(nameLike: string) {
        return await this.productRepo.find({
            where: {
                product_name: ILike(`%${nameLike}%`),
            }
        })
    }

    async getProduct(product_id: string) {
        return await this.productRepo.findOne({
            where: {
                product_id
            }
        })
    }

    async updateProduct(product_id: string, productDto: ProductDto) {
        const res = await this.productRepo.findOne({
            where: {
                product_id
            }
        })

        if(!res) return false

        res.product_name = productDto.product_name
        res.price = productDto.price
        res.quantity = Number.parseInt(productDto.quantity.toString())
        res.description = productDto.description

        await this.productRepo.save(res)
        return true

    }

    
    async addProduct(productDto: ProductDto) {

        const newProduct = new ProductEntity()
        newProduct.product_name = productDto.product_name
        newProduct.price = productDto.price
        newProduct.quantity = productDto.quantity
        newProduct.description = productDto.description

        await this.productRepo.save(newProduct)
        return true

    }

    async deleteProdcut(product_id: string) {
        try {
            await this.productRepo.delete({
                product_id
            })
            return true
        } 
        catch(error) {
            return false
        }
    }


}
