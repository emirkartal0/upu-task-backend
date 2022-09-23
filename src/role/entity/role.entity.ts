import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import userRole, { userName } from "../enum/userRole.enum";

@Entity()
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'jsonb'
    })
    name: userName;

    @Column({
        type:'enum',
        enum: userRole,
    })
    key: userRole;
}