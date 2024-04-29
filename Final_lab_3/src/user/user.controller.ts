import { Body, Controller, Delete, Get, Param, Patch, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUser(@Query('search') search: string) {
        return await this.userService.getAllUser(search)
    }
    @Get(':username')
    async getUser(@Param('username') username: string) {
        return await this.userService.getUser(username)
    }

    @Patch(":username") 
    async updateUser(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.userService.updateUser(username, updateUserDto)
    }

    @Delete(":username")
    async deleteUser(@Param('username') username : string) {
        return this.userService.deleteUser(username)
    }
}
