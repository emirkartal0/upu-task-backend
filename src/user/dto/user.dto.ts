import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ required: true })
    @IsEmail()
    @IsNotEmpty()
    readonly email: String;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    readonly password: String;
    
}