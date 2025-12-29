import { Request } from 'express';
import { UserController } from "./UserController";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe("UserController", () => {
    const mockUserService = { 
        createUser: jest.fn(),
        getAllUsers: jest.fn().mockReturnValue([{ name: "Bob", email: "bob@example.com" }])
    };
        // se quiser pegar somente algumas propriedades do 
        // UserService 
        // usar o :'Partial<UserService>'

    const userController = new UserController(mockUserService as any);


    it("should create a user", () => {
        const mockRequest = {
            body: {
                 name: "Bob", 
                 email: "bob@example.com" 
                }
        } as Request

        const mockResponse = makeMockResponse();
        
        const Response = userController.createUser(mockRequest, mockResponse);

        console.log(Response);
        expect(mockResponse.state.status).toBe(201);
    })
})
 