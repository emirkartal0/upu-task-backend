import { Body, Controller, Post } from '@nestjs/common';
import { ProjectDto } from './dto/project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(
        private readonly projectService: ProjectService,
    ) { }

    @Post('create')
    async createProject(@Body() data: ProjectDto) {
        return await this.projectService.createProject(data);
    }
}
