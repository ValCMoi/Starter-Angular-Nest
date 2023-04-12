import { Role } from "src/auth/enums/role.enum"

export class CreateUserDto {
    readonly email: string
    readonly password: string
    role: Role
}
