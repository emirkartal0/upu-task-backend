import { Controller, Post } from '@nestjs/common';
import { ProjectRoleService } from './project-role.service';

@Controller('project-role')
export class ProjectRoleController {
    constructor(
        private readonly projectRoleService: ProjectRoleService 
    ) { }

    @Post('create')
    async createProjectRole(data) {
        return await this.projectRoleService.createProjectRole(data);
    }
    

}
