import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class SignUpRequestDto {
  @ApiProperty({ description: 'User email address', required: true })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', required: true })
  @IsString()
  @Length(8, 100)
  password: string;
}
