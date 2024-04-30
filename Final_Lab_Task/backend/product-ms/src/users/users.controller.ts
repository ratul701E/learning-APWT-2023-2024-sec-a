import { Body, Controller, Delete, Get, Param, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getAllUser(@Query('search') search: string) {
    return await this.usersService.getAllUser(search)
  }
  @Get(':username')
  async getUser(@Param('username') username: string) {
    return await this.usersService.getUser(username)
  }

  @Patch(":username")
  @UsePipes(ValidationPipe)
  async updateUser(@Param('username') username: string, @Body() updateUserDto: updateUserDto) {
    return await this.usersService.updateUser(username, updateUserDto)
  }

  @Delete(":username")
  async deleteUser(@Param('username') username: string) {
    return this.usersService.deleteUser(username)
  }
}
