import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLoginDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserLoginDto) {}
