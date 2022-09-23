import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guard';
import { JwtStrategy } from './strategy';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { Organization } from 'src/organization/entity/organization.entity';
import { OrganizationService } from 'src/organization/organization.service';
import { Project } from 'src/project/entity/project.entity';
import { ProjectService } from 'src/project/project.service';
import { ProjectRole } from 'src/project-role/entity/project-role.entity';
import { ProjectRoleService } from 'src/project-role/project-role.service';
import { Role } from 'src/role/entity/role.entity';
import { RoleService } from 'src/role/role.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    }),
    TypeOrmModule.forFeature([User, Organization, Project, ProjectRole, Role]),
    JwtModule.register({})
  ],
  providers: [AuthService, UserService, JwtStrategy, JwtGuard, OrganizationService, ProjectService, ProjectRoleService, RoleService],
  controllers: [AuthController]
})
export class AuthModule {}
