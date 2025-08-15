import { Injectable, Logger } from '@nestjs/common';
import { SignUpRequestDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor() {}

  async signup(signUpReqestDto: SignUpRequestDto) {
    console.log(signUpReqestDto);
  }
}
