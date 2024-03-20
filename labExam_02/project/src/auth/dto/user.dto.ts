import { IsAlpha, IsAlphanumeric, IsEmail, IsNumber, MaxLength, MinLength } from "class-validator";


export class UserDTO {
    @MaxLength(30)
    @MinLength(3)
    @IsAlpha()
    fullname: string

    @IsEmail()
    @MaxLength(50)
    @MinLength(10)
    email: string

    @MaxLength(20)
    @MinLength(3)
    city: string

    @MaxLength(20)
    @MinLength(3)
    country: string

    @MaxLength(20)
    @MinLength(3)
    company: string

    @IsAlphanumeric()
    @MaxLength(15)
    @MinLength(11)
    phone: string

    @MaxLength(20)
    @MinLength(8)
    password: string

    @MaxLength(20)
    @MinLength(8)
    cpassword: string
}