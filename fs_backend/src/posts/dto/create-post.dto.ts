/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from "class-validator";


export class CreatePostDto {
    @IsOptional()
    id: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    body: string;

    @IsOptional()
    author_id?: string;
}
