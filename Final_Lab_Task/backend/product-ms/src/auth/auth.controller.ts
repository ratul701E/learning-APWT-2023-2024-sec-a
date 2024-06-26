import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from './dto/signup.dto';
import { SigninDTO } from './dto/signin.dto';
import { retry } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    
  }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signup(@Body() signupDto: SignupDTO) {
    return await this.authService.signup(signupDto)
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signin(@Body() signinDto: SigninDTO) {
    return await this.authService.signin(signinDto)
  }

  @Get('exist/:username') 
  async isUsernameExist(@Param('username') username: string) {
    return await this.authService.isExistUsername(username)
  }
}
