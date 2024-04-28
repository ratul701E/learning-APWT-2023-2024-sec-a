import { Column, Entity, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt'


export enum Role {
    ADMIN,
    EMPLOYEE
}

@Entity('user')
export class UserEntity {
    @PrimaryColumn({ nullable: false, unique: true })
    username: string

    @Column({ nullable: false })
    fullname: string

    @Column({ nullable: false })
    company: string

    @Column({ nullable: false })
    contact: string

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