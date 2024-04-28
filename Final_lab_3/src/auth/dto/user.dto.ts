import { IsAlpha, IsAlphanumeric, IsEmail, IsNumber, MaxLength, MinLength } from "class-validator";


export class UserDTO {
    @MaxLength(30)
    @MinLength(3)
    fullname: string

    @MaxLength(50)
    @MinLength(4)
    username: string

    @MaxLength(20)
    @MinLength(3)
    company: string

    @IsAlphanumeric()
    @MaxLength(15)
    @MinLength(11)
    contact: string

    @MaxLength(20)
    @MinLength(8)
    password: string

    @MaxLength(20)
    @MinLength(8)
    cpassword: string
}