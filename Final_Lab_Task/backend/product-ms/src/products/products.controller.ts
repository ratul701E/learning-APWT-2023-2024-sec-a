import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async getAllProduct(@Query('search') nameLike: string) {
    return await this.productsService.getAllProduct(nameLike.trim())
  }

  @Get(":product_id")
  async getProduct(@Param('product_id') product_id: string) {
    return await this.productsService.getProduct(product_id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  async addProduct(@Body() productDto: ProductDto) {
    return await this.productsService.addProduct(productDto)
  }

  @Patch(":product_id")
  @UsePipes(ValidationPipe)
  async updateProduct(@Param('product_id') product_id: string, @Body() productDto: ProductDto) {
    return await this.productsService.updateProduct(product_id, productDto)
  }

  @Delete(":product_id")
  @UsePipes(ValidationPipe)
  async deleteProduct(@Param('product_id') product_id: string) {
    return await this.productsService.deleteProdcut(product_id)
  }
}
