import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { DefaultOrganizationDto } from "src/organization/dto/defaultOrganization.dto";

export class ProjectDto {

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly image: string;

    @IsOptional()
    @IsString()
    readonly description: string;

    @ApiProperty({ required: true })
    @IsString()
    readonly organization: DefaultOrganizationDto;

}