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

    it("deve puxar a função do get all users", () => {
        const mockRequest = makeMockRequest({});
        const mockResponse = makeMockResponse();
        userController.getAllUsers( mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toEqual([{ name: "Bob", email: "bob@example.com" }]);
    });

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
        expect(mockResponse.state.json).toMatchObject({"message": "User created successfully!"});
    })
    it("should not create a user beacause don´t have name", () => {
        const mockRequest = {
            body: {
                    email: "email"
                }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({"message": "Name and email are required!"});
    })
    it("should not create a user beacause don´t have email", () => {
        const mockRequest = {
            body: {
                    name: "jose"
                }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({"message": "Name and email are required!"});
    })

    it("should delete a user", () => {
        const mockRequest = makeMockRequest({ query: { id: '1' } });
        const mockResponse = makeMockResponse();
        userController.deleteUser( mockRequest, mockResponse);

        console.log(mockResponse.state);

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({"message": `User with id ${mockRequest.query.id} deleted successfully!`});
    })

    it("should not delete a user beacause don´t have id", () => {
        const mockRequest = makeMockRequest({ });
        const mockResponse = makeMockResponse();
        userController.deleteUser( mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({"message": "User id is required!"});
    })
})
 