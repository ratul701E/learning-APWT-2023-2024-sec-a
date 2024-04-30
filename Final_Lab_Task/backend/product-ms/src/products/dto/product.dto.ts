import { Transform } from "class-transformer";
import { IsAlpha, IsAlphanumeric, IsEmail, IsIn, IsInt, IsNumber, IsNumberString, MaxLength, MinLength, isPhoneNumber, validate } from "class-validator";


export class ProductDto {
    @MaxLength(50)
    @MinLength(4)
    product_name: string

    @MaxLength(1000)
    @MinLength(10)
    description: string

    @IsNumberString()
    price: number

    @IsNumberString()
    quantity: number
}
