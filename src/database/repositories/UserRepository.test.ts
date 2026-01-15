import { UserRepository } from './UserRepository.js';
import { getMockEntityManager } from '../../__mocks__/mockEntityManager.mock.js';
import { User } from '../entities/User.js';
import { EntityManager } from 'typeorm';

describe('User repository', () => { 
    let userRepository: UserRepository;
    let managerMock: Partial<EntityManager>;
    
    const mockUser: User = {
        id_user: '12345',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'securepassword'
    }
    
    beforeAll(async () => {
        managerMock = await getMockEntityManager({});
        userRepository = new UserRepository(managerMock as EntityManager);
    }) 

    it('should create a new user', async () => {
        await userRepository.createUser(mockUser);
        expect(managerMock.save).toHaveBeenCalled();
 })
})