import { Injectable } from "@nestjs/common";
import { UnitOfWork } from "../../share/unitofwork/unit-of-work.provider";
import { Connection, getManager } from "typeorm";
import { BaseRepository } from "../../share/repository/abstract.repository";
import { User } from "../model/user.model";

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(uow: UnitOfWork) {
        super(uow);
    }

    public async findAll(): Promise<User[]> {
        const entityManager = this.uow.getTransactionManager()
        console.log(`Transaction active: ${this.uow.getQueryRunner().isTransactionActive}`)
        return await entityManager.find(User);
    }
}