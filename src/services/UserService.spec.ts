import { response } from "express";
import { UserService } from "./UserService.js";

jest.mock("../database/repositories/UserRepository.js");

const UserRepositoryMock = jest.requireMock("../database/repositories/UserRepository.js");

describe("UserService", () => { 

    const userService = new UserService( new UserRepositoryMock());

    it("should add a user", () => {
        UserRepositoryMock.prototype.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id_user: "1",
            name: "Alice",
            email: "alice@example.com",
            password: "password123"
        })); 
        userService.createUser( "Alice", "alice@example.com", "password123");
        expect(UserRepositoryMock.prototype.createUser).toHaveBeenCalled();
        expect(response).toMatchObject({
            id_user: "1",
            name: "Alice",
            email: "alice@example.com",
            password: "password123"
        });
    });

});