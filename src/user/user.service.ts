import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createUser(data) {
        const user = new User()

        user.id = data.id;
        user.email = data.email;
        user.password = await this.bcryptPassword(data.password)
        user.name = this.createUserName(data.email);
        user.registerDate = new Date();
        user.description = data.description;
        user.avatar = data.avatar;
        user.webpage = data.webpage;
        user.company = data.company;
        user.language = data.language;
        user.firstWeekDay = data.firstWeekDay;
        user.timeZone = data.timeZone;

        const response = await this.userRepository.save(user);
        
        return response;
    }

    createUserName(email: string) {
        const result = email.split('@')[0];
        return result;
    }

    async bcryptPassword(password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    async findUser(id: string) {
        const user = await this.userRepository.findOne(id)
        return user;
    }

    async allUser() {
        const users = await this.userRepository.find()
        return users;
    }

}
