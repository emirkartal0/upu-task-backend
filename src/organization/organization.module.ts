import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entity/organization.entity';
import { ProjectService } from 'src/project/project.service';
import { Project } from 'src/project/entity/project.entity';
import { ProjectRoleService } from 'src/project-role/project-role.service';
import { ProjectRole } from 'src/project-role/entity/project-role.entity';
import { Role } from 'src/role/entity/role.entity';
import { RoleService } from 'src/role/role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, Project, ProjectRole, Role])
  ],
  providers: [OrganizationService, ProjectService, ProjectRoleService, RoleService],
  controllers: [OrganizationController]
})
export class OrganizationModule { }
