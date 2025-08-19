// src/auth/dto/register.dto.ts
import { IsIn, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  username!: string;

  @IsString()
  password!: string;

  @IsIn(['admin', 'superadmin'])
  role!: 'admin' | 'superadmin';
}
