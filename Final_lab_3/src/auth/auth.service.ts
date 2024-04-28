import { Body, Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt'
import { SigninDTO } from './dto/signin.dto';
import { Response } from 'express';
import { randomUUID } from 'crypto';
import { UserEntity, Role } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) { }

    async registration(userDto: UserDTO) {

        if (userDto.cpassword != userDto.password) return "Password and confirm password not matched."

        const res = await this.userRepo.findOne({
            where: {
                username: userDto.username
            }
        })

        if (res != null) return "User with this username is already exist"


        const newUser: UserEntity = new UserEntity()
        newUser.fullname = userDto.fullname
        newUser.username = userDto.username
        newUser.company = userDto.company
        newUser.contact = userDto.contact
        newUser.role = Role.EMPLOYEE

        try {
            newUser.salt = await bcrypt.genSalt();
            newUser.password = await bcrypt.hash(userDto.password, newUser.salt);


            await this.userRepo.save(newUser)
            return true
        }
        catch(error) {
            return error
        }

    }

    async signin(signinDto: SigninDTO, @Res() res: Response) {
        const { username, password } = signinDto
        const user = await this.userRepo.findOneBy({
            username,
        })

        if (user && await user.checkPassword(password)) {
            res.cookie('auth', randomUUID(), {
                maxAge: 99999999999, //expire time
                httpOnly: true
            })
            return {
                status: true,
                role: Role[user.role]
            }
        }
        else {
            return {
                status: false
            }
        }

    }

    async isExistUsername(username: string) {
        const res = await this.userRepo.findOne({
            where: {
                username
            }
        })

        if (res != null) return true
        return false
    }
}
