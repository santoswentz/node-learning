    export interface User {
        id: number;
        name: string;
        email: string;
    }

    const db = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    ];

export class UserService {

    db: User[];

    constructor(
        dataBase = db
    ) {
        this.db = dataBase;
    }

    createUser = (name: string, email: string) => {
            const user:User = {
                id: db.length + 1,
                name,
                email
            }
            this.db.push(user);
            console.log("Db updated", this.db);
    }

    getAllUsers = () => {
        return this.db;
    }
}