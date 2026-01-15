import e, { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { Subject } from 'typeorm/persistence/Subject.js';

const user = {
    id_user: 1,
    name: 'testuser',
    email: 'email@example.com',
    password: 'password123'
};

export class LoginController {
    login = async(req:Request, res:Response) => {

        // são 3 valores dentro do token
        // 1 - payload (dados do usuario)
        // 2 - secret (chave secreta para gerar o token)
        // 3 - options (tempo de expiração, etc)

        const tokenData = {
            name: user.name,
            email: user.email
        };

        const tokenKey = '1234567890abcdef';

        const TokenOptions = {
            subject: String(user.id_user),
        };

        const token = sign(tokenData, tokenKey, TokenOptions);

        return res.status(200).json({ message: 'Login successful', user });
    }
}
