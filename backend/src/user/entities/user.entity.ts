import { Role } from "src/auth/enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string
    
    @Column({nullable: false})
    readonly email: string

    @Column({nullable: false})
    readonly password: string

    @Column({
        type:"enum",
        enum: Role,
        default: Role.User
    })
    role: Role
}
