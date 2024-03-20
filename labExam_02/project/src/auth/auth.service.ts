import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt'
import { SigninDTO } from './dto/signin.dto';
import { Response } from 'express';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async registration(userDto: UserDTO) {

        if(userDto.cpassword != userDto.password) return "Password and confirm password not matched."

        const res = await this.userRepo.findOne({
            where: {
                email: userDto.email
            }
        })

        if(res != null) return "User with this email is already exist"

        
        const newUser: UserEntity = new UserEntity()
        newUser.fullname = userDto.fullname
        newUser.email = userDto.email
        newUser.city = userDto.city
        newUser.company = userDto.company
        newUser.country = userDto.country
        newUser.phone = userDto.phone
        newUser.role = Role.CUSTOMER

        newUser.salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(userDto.password, newUser.salt);


        this.userRepo.save(newUser)

    }

    async signin(signinDto: SigninDTO, @Res() res: Response){
        const {email, password} = signinDto
        const user = await this.userRepo.findOneBy({
            email,
        })

        if(user && await user.checkPassword(password)){
            res.cookie('auth', randomUUID(), {
                maxAge: 99999999999 //expire time
            })
            return {
                status : "Sign in successfull",
                role: Role[user.role]
            }
        }
        else {
            return "Invalid credentials"
        }
        
    }
}
