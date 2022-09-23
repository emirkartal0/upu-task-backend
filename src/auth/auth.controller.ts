import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service'
import { SignDto } from './dto/sign.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService
    ) { }

    @Post('/signup')
    async signUp(@Body() data: SignDto) {
        return await this.authService.signup(data);
    }

    @Post('/signin')
    async signIn(@Body() data: SignDto) {
        return await this.authService.signIn(data);
    }

    @Post('/finduser')
    async findUser(@Body() id: string) {
        return await this.userService.findUser(id);
    }
}
