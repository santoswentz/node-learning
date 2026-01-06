import { EntityManager } from "typeorm";

interface MockManageArgs {
    saveReturn?: object | [object];

}

export const getMockEntityManager = async({
    saveReturn = undefined
}: MockManageArgs): Promise<EntityManager> => {
    
    const manager: Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(() => Promise.resolve());

    return manager as EntityManager;
}