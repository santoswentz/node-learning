import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity("users")

export class User {
    @PrimaryGeneratedColumn()
    id_user: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(id_user: number, nome: string, email: string, password: string) {
        this.id_user = randomUUID();
        this.nome = nome;
        this.email = email;
        this.password = password;
    }
}