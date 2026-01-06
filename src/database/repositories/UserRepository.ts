import { EntityManager } from "typeorm";
import { AppDataSource } from "../index.js";
import { User } from "../entities/User.js";

export class UserRepository {
    private manager: EntityManager;

    constructor(
        manager = AppDataSource.manager
    ) {
        this.manager = manager;
    }
    async createUser(user: User) { 
        return this.manager.save(user);
    }

}