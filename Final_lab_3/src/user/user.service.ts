import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { ILike, Repository } from 'typeorm';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {

    @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>

    async getAllUser(search: string) {
        console.log(search)
        return await this.userRepo.find({
            where: {
                fullname: ILike(`%${search}%`),
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

    async updateUser(username:string, updateUserDto: UpdateUserDto) {
        const res = await this.userRepo.findOne({
            where: {
                username
            }
        })

        if(!res) return false

        res.username = updateUserDto.username
        res.company = updateUserDto.company
        res.contact = updateUserDto.contact
        res.fullname = updateUserDto.fullname

        this.userRepo.save(res)
        return true

    }

    async deleteUser(username: string) {
        return await this.userRepo.delete({
            username
        })
    }
}
