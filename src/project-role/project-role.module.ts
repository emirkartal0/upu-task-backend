import { Module } from '@nestjs/common';
import { ProjectRoleService } from './project-role.service';
import { ProjectRoleController } from './project-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRole } from './entity/project-role.entity';
import { Role } from 'src/role/entity/role.entity';
import { RoleService } from 'src/role/role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectRole, Role])
  ],
  providers: [ProjectRoleService, RoleService],
  controllers: [ProjectRoleController]
})
export class ProjectRoleModule {}
