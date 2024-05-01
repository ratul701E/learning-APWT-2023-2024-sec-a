import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { ILike, Repository } from 'typeorm';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async getAllUser(search: string) {
        return await this.userRepo.find({
            where: {
                name: ILike(`%${search}%`),
            }
        })
    }

    async getUser(username: string) {
        return await this.userRepo.findOne({
            where:{
                username
            }
        })
    }

    async updateUser(username:string, updateUserDto: updateUserDto) {
        const res = await this.userRepo.findOne({
            where: {
                username
            }
        })

        if(!res) return false

        res.name = updateUserDto.name
        res.phone = updateUserDto.phone
        res.address = updateUserDto.address
        res.username = updateUserDto.username

        this.userRepo.save(res)
        return true

    }

    async deleteUser(username: string) {
        return await this.userRepo.delete({
            username
        })
    }
}
