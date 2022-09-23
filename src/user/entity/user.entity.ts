import { Organization } from "src/organization/entity/organization.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    registerDate: Date;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    avatar: string;

    @Column({ nullable: true })
    webpage: string;

    @Column({ nullable: true })
    company: string;

    @Column({ default: 'tr' })
    language: string;

    @Column({ default: 'monday' })
    firstWeekDay: string;

    @Column({ default: 'UTC-8' })
    timeZone: string;

    @OneToMany(() => Organization, (organization) => organization.user)
    organizations: Organization[];

}