import { MaxLength, MinLength } from "class-validator";


export class SigninDTO {
    @MaxLength(50)
    @MinLength(4)
    username: string

    @MaxLength(20)
    @MinLength(8)
    password: string
}