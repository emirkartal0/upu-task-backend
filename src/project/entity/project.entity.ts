import { Organization } from "src/organization/entity/organization.entity";
import { ProjectRole } from "src/project-role/entity/project-role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    date: Date;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => ProjectRole, (projectRole) => projectRole.project)
    projectRole: ProjectRole[];

    @ManyToOne(() => Organization, (organization) => organization.projects)
    organization: Organization;

}