import { EntityManager } from "typeorm";

interface MockManageArgs {
    saveReturn?: object | [object];
    findOneByReturn?: object | null  
}

export const getMockEntityManager = async({
    saveReturn = undefined, 
    findOneByReturn = undefined
}: MockManageArgs): Promise<EntityManager> => {

    const manager: Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(() => Promise.resolve(saveReturn));
    manager.findOneBy = jest.fn().mockImplementation(() => Promise.resolve(findOneByReturn));

    return manager as EntityManager;
}