/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { CustomerType } from "@prisma/client";


export class CreateCustomerDto {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsOptional()
    @IsEnum(CustomerType)
    type?: CustomerType

}
