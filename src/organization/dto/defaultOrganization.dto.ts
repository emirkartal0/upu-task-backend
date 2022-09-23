import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ProjectDto } from "src/project/dto/project.dto";
import { CreateUserDto } from "src/user/dto/patchUser.dto";

export class DefaultOrganizationDto {

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly description: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly webpage: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly projects: ProjectDto;

    // CreateUserDto yerine daha uygunu yazılabilir.
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    readonly user: CreateUserDto;


}