/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
    @IsOptional()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsOptional()
    isCompleted: boolean;

    @IsOptional()
    user_id: string;


}
