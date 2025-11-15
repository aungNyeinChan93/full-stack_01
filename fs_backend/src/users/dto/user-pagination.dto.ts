/* eslint-disable prettier/prettier */

import { UserRole } from "@prisma/client";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";



export class UserPaginationDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    page?: number;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    limit: number;

    @IsOptional()
    role: UserRole

    @IsOptional()
    name: string
}