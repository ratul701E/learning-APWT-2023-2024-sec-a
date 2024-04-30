import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Role } from "src/auth/dto/signup.dto";


@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    product_id: string

    @Column({ nullable: false })
    product_name: string

    @Column({ nullable: false })
    description: string

    @Column({ nullable: false })
    quantity: number

    @Column({ nullable: false })
    price: number
}