import { PartialType } from '@nestjs/mapped-types';
import { CreateQrsDto } from './create-qrs.dto';

export class UpdateQrsDto extends PartialType(CreateQrsDto) {}
