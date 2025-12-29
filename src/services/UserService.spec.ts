import { UserService } from "./UserService.js";

describe("UserService", () => {
    const mockDb: any[] = []
    const userService = new UserService(mockDb);

    it("should add a user", () => {
        const mockConsole = jest.spyOn(console, 'log').mockImplementation();
        userService.createUser(" Alice", "alice@example.com");
        expect(mockConsole).toHaveBeenCalledWith('Db updated:', mockDb);
    });

});