import { IsAlpha, IsAlphanumeric, IsEmail, IsNumber, MaxLength, MinLength } from "class-validator";


export class SigninDTO {
    @IsEmail()
    @MaxLength(50)
    @MinLength(10)
    email: string

    @MaxLength(20)
    @MinLength(8)
    password: string
}