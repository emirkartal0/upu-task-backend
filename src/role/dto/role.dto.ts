import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import userRole, { userName } from "../enum/userRole.enum";


export class RoleDto {

    @ApiProperty({ required: true })
    @IsNotEmpty()
    readonly id: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    readonly key: userRole;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    readonly name: userName;

}