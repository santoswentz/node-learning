
    const db = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    ];

export class UserService {
    createUser = (name: string, email: string) => {
            const user = {
                id: db.length + 1,
                name,
                email
            }
            db.push(user);
            console.log(db);
    }
    getAllUsers = () => {
        return db;
    }
}