import { Column, Entity, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt'


export enum Role {
    ADMIN,
    CUSTOMER
}

@Entity('user')
export class UserEntity {
    @PrimaryColumn({ nullable: false, unique: true })
    email: string

    @Column({ nullable: false })
    fullname: string
    
    @Column({ nullable: false })
    city: string

    @Column({ nullable: false })
    country: string

    @Column({ nullable: false })
    company: string

    @Column({ nullable: false })
    phone: string

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