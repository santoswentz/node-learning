import { Router } from 'express';
import { UserController } from './controllers/UserController.js';
import { LoginController } from './controllers/LoginController.js';

const router = Router();
const userController = new UserController();
const loginController = new LoginController();


router.post('/create-user', userController.createUser);
router.get('/get-users', userController.getAllUsers);

router.delete('/delete-user', userController.deleteUser);

router.post('/login', loginController.login);

export { router };