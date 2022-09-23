import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { UUIDVersion } from "class-validator";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
) {
    constructor(
        config: ConfigService,
        private userService: UserService,
        ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
        });
    }

    // Request'e döndürelecek user-response'u return ediyoruz.
    async validate(payload: { sub: string, email: string }) {
        const user = await this.userService.findUser(payload.sub);
        user.password = undefined;
        return {
            user,
            payload
        };
    }
}