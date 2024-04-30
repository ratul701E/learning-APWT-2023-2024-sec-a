import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Role, SignupDTO } from './dto/signup.dto';
import * as bcrypt from 'bcrypt'
import { SigninDTO } from './dto/signin.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async signup(signupDto: SignupDTO) {
        if (signupDto.confirm_password != signupDto.password) return {
            status: "Password and confirm password not matched."
        }


        if (await this.isExistUsername(signupDto.username)) return {
            status: "User with this username is already exist"
        }


        const newUser: UserEntity = new UserEntity()
        newUser.name = signupDto.name
        newUser.username = signupDto.username
        newUser.phone = signupDto.phone
        newUser.address = signupDto.address
        newUser.role = Role.CUSTOMER //default role

        try {
            newUser.salt = await bcrypt.genSalt();
            newUser.password = await bcrypt.hash(signupDto.password, newUser.salt);
            await this.userRepo.save(newUser)
            return true
        }
        catch(error) {
            return error
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

    async signin(signinDto: SigninDTO) {
        const res = await this.userRepo.findOne({
            where: {
                username: signinDto.username,
            }
        })

        if(!(res && await res.checkPassword(signinDto.password))) return false

        /**
         * cookie login below
         */
        return {
            status: true,
            username: res.username,
            role: res.role
        }
    }
}
