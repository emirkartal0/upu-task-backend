import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectRoleService } from 'src/project-role/project-role.service';
import { Repository } from 'typeorm';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
        private projectRoleService: ProjectRoleService
    ) { }

    async createProject(data) {
        const project = new Project();

        project.name = this.generateProjectName(data.name);
        project.date = new Date();
        project.image = data.image;
        project.description = data.description;
        project.organization = data.organization;

        const response = await this.projectRepository.save(project);

        const projectRole = {
            project: response.id,
        }

        await this.projectRoleService.createProjectRole(projectRole);


        return response;
    }

    generateProjectName(name: string) {
        return name.split('Organizasyonu')[0] + 'Projesi';
    }

}
