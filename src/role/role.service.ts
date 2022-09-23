import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entity/role.entity';
import userRole from './enum/userRole.enum';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ) { }

    async createRole() {
        const role = new Role();
        role.key = userRole.ADMIN;
        role.name = {
            tr: '',
            en: ''
        }

        const response = await this.roleRepository.save(role);
        return response;
    }
}
