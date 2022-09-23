import { Project } from "src/project/entity/project.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organization {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    date: Date;

    @Column({ nullable: true })
    webpage: string;

    @ManyToOne(() => User, (user) => user.organizations)
    user: User;

    @OneToMany(() => Project, (project) => project.organization)
    projects: Project[];

}