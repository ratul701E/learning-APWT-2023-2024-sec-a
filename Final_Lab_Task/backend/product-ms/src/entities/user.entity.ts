import { Column, Entity, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Role } from "src/auth/dto/signup.dto";


@Entity('user')
export class UserEntity {
    @PrimaryColumn({ nullable: false, unique: true })
    username: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    phone: string

    @Column({ nullable: false })
    address: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: false })
    salt: string

    @Column({ nullable: false })
    role: Role

    async checkPassword(password){
        const res = await bcrypt.hash(password, this.salt);
        return res === this.password;
    }
}