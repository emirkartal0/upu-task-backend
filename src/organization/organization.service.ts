import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { Organization } from './entity/organization.entity';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(Organization)
        private readonly organizationRepository: Repository<Organization>,
        private projectService: ProjectService,
    ) { }

    async createDefaultOrganization(data) {
        const organization = new Organization()

        organization.name = data.name + ' Organizasyonu';
        organization.date = new Date();
        organization.webpage = data.webpage;
        organization.description = data.description;
        organization.user = data.id;
        organization.projects = data.projects;

        const response = await this.organizationRepository.save(organization);

        const project = {
            name: response.name,
            image: '',
            description: '',
            organization: response.id
        }
        
        await this.projectService.createProject(project);

        return response;
    }


}
