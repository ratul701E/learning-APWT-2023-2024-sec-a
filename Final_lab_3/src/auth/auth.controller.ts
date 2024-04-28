import { Body, Controller, Param, Post, Req, Res, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { AuthService } from './auth.service';
import { SigninDTO } from './dto/signin.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/registration')
    @UsePipes(ValidationPipe)
    async registration(@Body() userDto: UserDTO){
        console.log("New registrasion endpoint hits with: ")
        console.log(userDto)
        return await this.authService.registration(userDto)
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDto: SigninDTO, @Res({passthrough: true}) res: Response){
        console.log("New signin endpoint hits with: ")
        console.log(signinDto)
        return this.authService.signin(signinDto, res)
    }

    @Post('/logout')
    async logout(@Req() req: Request, @Res({passthrough: true}) res: Response){
        if(req.cookies.auth) {
            res.clearCookie('auth')
            return 'logout successfull'
        }
        return 'please login first.'
    }

    @Get('isUsernameExist/:username') 
    async isUsernameExist(@Param('username') username: string) {
        return this.authService.isExistUsername(username)
    }
    
}
