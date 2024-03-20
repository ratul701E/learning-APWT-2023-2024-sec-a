/// <reference types="cookie-parser" />
import { UserDTO } from './dto/user.dto';
import { AuthService } from './auth.service';
import { SigninDTO } from './dto/signin.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(userDto: UserDTO): Promise<"Password and confirm password not matched." | "User with this email is already exist">;
    signin(signinDto: SigninDTO, res: Response): Promise<"Invalid credentials" | {
        status: string;
        role: string;
    }>;
    logout(req: Request, res: Response): Promise<"logout successfull" | "please login first.">;
}
