/* eslint-disable prettier/prettier */
import { UserRole } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";


export class CreateUserDto {

    @IsOptional()
    id?: string;

    @IsNotEmpty()
    name: string;

    @IsOptional()
    age: number;

    @IsNotEmpty()
    email: string;

    @IsOptional()
    @IsEnum(UserRole)
    role: UserRole;

    @IsOptional()
    created_at: Date;

    @IsOptional()
    updated_at: Date;

}
