/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
    @IsOptional()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsBoolean()
    isCompleted?: boolean;

    @IsOptional()
    user_id: string;


}
