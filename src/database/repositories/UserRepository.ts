import { EntityManager } from "typeorm";
import { AppDataSource } from "../index.js";
import { User } from "../entities/User.js";

export class UserRepository {
    private manager: EntityManager;

    constructor(
        manager: EntityManager
    ) {
        this.manager = manager;
    }
    createUser = async (user: User): Promise<User> => { 
        return this.manager.save(user);
    }
 
    getUser = async (userId: string): Promise<User | null> => { 
        return this.manager.findOneBy(User, { 
            id_user: userId 
        });
    }

    getUserbyEmailAndPassword = async (email: string, password: string): Promise<User | null> => { 
        return this.manager.findOneBy(User, { 
            email: email,
            password: password
        });
    }
 
 

}