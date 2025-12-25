import { Router } from 'express';
import { UserController } from './controllers/UserController.js';

const router = Router();
const userController = new UserController();


router.post('/create-user', userController.createUser);
router.get('/get-users', userController.getAllUsers);

router.delete('/delete-user', (req, res) => {
    return res.send('Delete User');
});

export { router };