import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleService } from 'src/role/role.service';
import { Repository } from 'typeorm';
import { ProjectRole } from './entity/project-role.entity';

@Injectable()
export class ProjectRoleService {
    constructor(
        @InjectRepository(ProjectRole)
        private readonly projectRoleRepository: Repository<ProjectRole>,
        private roleService: RoleService
    ) { }

    async createProjectRole(data) {
        const projectRole = new ProjectRole()

        const role = await this.roleService.createRole()

        projectRole.project = data.project;
        projectRole.role = role.id;
        const response = await this.projectRoleRepository.save(projectRole);

        return response;
    }

}
