import { Project } from "src/project/entity/project.entity";
import { Role } from "src/role/entity/role.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProjectRole {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Project, (project) => project.projectRole)
    project: Project;

    @OneToOne(() => Role)
    @JoinColumn()
    role: string;

}