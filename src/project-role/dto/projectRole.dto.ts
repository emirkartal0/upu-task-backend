import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ProjectDto } from "src/project/dto/project.dto";


export class ProjectRole {

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    // ***1***?'?'??'?'???*
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    readonly role: string;

    // ***1***?'?'??'?'???*
    @ApiProperty({ required: true })
    @IsNotEmpty()
    readonly project: string;


}