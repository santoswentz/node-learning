import { User } from "../database/entities/User.js";
import { AppDataSource } from "../database/index.js";
import { UserRepository } from "../database/repositories/UserRepository.js";

export class UserService {

    private userRepository: UserRepository;

    constructor(
        userRepository: UserRepository = new UserRepository(AppDataSource.manager)
    ) {
        this.userRepository = userRepository;
    }

    createUser = async(name: string, email: string, password: string): Promise<User> => { 
        const user = new User(1, name, email, password);
        return this.userRepository.createUser(user);
    }

    getUser = () => { 

    }

    getAuthenticatedUser = async(email: string, password: string): Promise<User | null> => { 
        return this.userRepository.getUserbyEmailAndPassword(email, password);
    }

    getToken = () => {
        
    }

}