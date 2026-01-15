import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity("users")

export class User {
    @PrimaryGeneratedColumn()
    id_user: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(id_user: number, name: string, email: string, password: string) {
        this.id_user = randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}