import { UnitOfWork } from "../unitofwork/unit-of-work.provider";
import { IRead } from "./read.interface.repository";
import { IWrite } from "./write.interface.repository";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    constructor(protected uow: UnitOfWork) { }

    public async create(item: T): Promise<boolean> {
        const queryRunner = this.uow.getTransactionManager();
        let isSaved: boolean = true;
        await queryRunner.save(item);
        console.log(isSaved)
        return isSaved;
    }
    update(id: string, item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}