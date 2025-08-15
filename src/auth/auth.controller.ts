import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { SignUpRequestDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiBody({ type: SignUpRequestDto, description: 'User signup information' })
  signup(@Body() signUpReqestDto: SignUpRequestDto) {
    this.authService.signup(signUpReqestDto);
  }
}
