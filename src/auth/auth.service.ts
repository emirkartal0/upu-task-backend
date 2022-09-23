import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { OrganizationService } from 'src/organization/organization.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwt: JwtService,
        private config: ConfigService,
        private organizationService: OrganizationService,
    ) { }

    async signIn(data) {
        try {
            const user = await this.userService.findUser(data.uuid);
            if (!user) {
                return response.status(400).json({ message: 'Email bulunamadı' })
            }
            const isPasswordCorrect = await bcrypt.compare(data.password, user.password)
            if (!isPasswordCorrect) {
                return response.status(404)
            }
            return this.signToken(user.id, user.email);
        } catch (error) { 
            return response.status(400).json({ message: error.message })
        }
    }

    async signup(data) {
        const user = await this.userService.createUser(data);
        const organization = {
            name: user.name,
            description: '',
            webpage:'',
            id: user.id,
            projects: null
        }
        this.organizationService.createDefaultOrganization(organization);
        return this.signToken(user.id, user.email);
    }

    async signToken(userId: string, email: string): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email
        };
        const secret = this.config.get('JWT_SECRET')

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '1d',
            secret: secret,
        });

        return {
            access_token: token,
        };
    }
}
