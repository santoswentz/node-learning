import { UserService } from './../services/UserService';
import type { Request, Response } from 'express';

// nos controles só será feita validações e regras de negocios o armazenamento dos dados
// será feito em um banco de dados e ele só fará a comunicação com o services

export class UserController {

    userService: UserService;

    constructor( userService = new UserService()) {
        this.userService = userService;
    }  
        
        // com essa injeção de dependencia eu posso 
        // testar o controller via jest criando um novo sem ter 
        // que utilizar o banco de dados
        // como pode ver no controller vc precisa mockar o
        // request e o response do express e testar os retornos

        createUser(req: Request, res: Response) {
            const userService = new UserService();
            const { name, email } = req.body;

            if(!name || !email){
                return res.status(400).json({message: 'Name and email are required!'});
            }

            userService.createUser(name, email);
            return res.status(201).json({message: 'User created successfully!'}); 
        } 

        getAllUsers(req: Request, res: Response) {
            const users = this.userService.getAllUsers();
            return res.status(200).json(users);
        }
}
