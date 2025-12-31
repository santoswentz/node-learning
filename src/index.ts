import  express from 'express';
import type { Request, Response } from 'express';
import { UserController } from './controllers/UserController.js';
import { router } from './routes.js';
import 'reflect-metadata' 
import { AppDataSource } from './database/index.js';

try {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!")
} catch (error) {
    console.error("Error during Data Source initialization", error)
}

const server = express();
const userController = new UserController();

server.use(express.json());
server.use(router);
 

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

server.get('/', (req: Request, res: Response) => {
  return res.send('Hello, World!');
});
