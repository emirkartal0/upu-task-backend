import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRole } from 'src/project-role/entity/project-role.entity';
import { ProjectRoleService } from 'src/project-role/project-role.service';
import { Role } from 'src/role/entity/role.entity';
import { RoleService } from 'src/role/role.service';
import { Project } from './entity/project.entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, ProjectRole, Role])
  ],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRoleService, RoleService]
})
export class ProjectModule {}
