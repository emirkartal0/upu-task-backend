import { Body, Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { User } from './entity/user.entity';

@UseGuards(JwtGuard, RolesGuard)
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }
    
    @hasRoles('Admin')
    @Get('me')
    getMe(@Req() req: Request) {
        console.log({
            user: req.user,
        });
        return req.user;
    }
    
    @Get('allusers')
    async getUsers(@Body() data: User ) {
        return await this.userService.allUser();
    }
}
