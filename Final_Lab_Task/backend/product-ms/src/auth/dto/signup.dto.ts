import { IsAlpha, IsAlphanumeric, IsEmail, IsNumber, IsNumberString, MaxLength, MinLength, isPhoneNumber } from "class-validator";

export enum Role {
    ADMIN,
    CUSTOMER
}



export class SignupDTO {
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

    @MaxLength(64)
    @MinLength(8)
    password: string

    @MaxLength(64)
    @MinLength(8)
    confirm_password: string

    role: string
}