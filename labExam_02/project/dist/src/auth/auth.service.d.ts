import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { SigninDTO } from './dto/signin.dto';
import { Response } from 'express';
export declare class AuthService {
    private readonly userRepo;
    constructor(userRepo: Repository<UserEntity>);
    registration(userDto: UserDTO): Promise<"Password and confirm password not matched." | "User with this email is already exist">;
    signin(signinDto: SigninDTO, res: Response): Promise<"Invalid credentials" | {
        status: string;
        role: string;
    }>;
}
