import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ required: true })
    @IsString()
    readonly email: String;

    @ApiProperty({ required: true })
    @IsString()
    readonly name: String;

    @ApiProperty({ required: true })
    @IsDate()
    readonly registerDate: Date;

    @ApiProperty({ required: false })
    @IsString()
    readonly description: String;
    
    @ApiProperty({ required: false })
    @IsString()
    readonly avatar: String;

    @ApiProperty({ required: false })
    @IsString()
    readonly webpage: String;

    @ApiProperty({ required: false })
    @IsString()
    readonly company: String;

    @ApiProperty({ required: false, default: 'tr' })
    @IsString()
    readonly language: String;

    @ApiProperty({ required: false, default: 'pazartesi' })
    @IsString()
    readonly firstWeekDay: String;

    @ApiProperty({ required: false, default: 'tr' })
    @IsString()
    readonly timeZone: String;

}