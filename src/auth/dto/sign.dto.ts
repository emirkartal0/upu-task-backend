import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class SignDto {
    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    readonly email: String;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    readonly password: String;
}
