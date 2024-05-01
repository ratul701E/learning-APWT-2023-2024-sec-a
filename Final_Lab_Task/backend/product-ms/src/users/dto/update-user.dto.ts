import { IsAlpha, IsAlphanumeric, IsEmail, IsNumber, IsNumberString, MaxLength, MinLength, isPhoneNumber } from "class-validator";


export class updateUserDto {
    @MaxLength(50)
    @MinLength(4)
    username: string

    @MaxLength(50)
    @MinLength(4)
    name: string

    @MaxLength(11)
    @MinLength(11)
    @IsNumberString()
    phone: string

    @MaxLength(500)
    @MinLength(10)
    address: string
}