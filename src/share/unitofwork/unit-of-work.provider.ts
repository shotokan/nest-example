import { Injectable, Scope } from "@nestjs/common";
import { Connection, EntityManager, QueryRunner } from "typeorm";

@Injectable({ scope: Scope.REQUEST })
export class UnitOfWork {
    private transactionManager: EntityManager | null;
    protected queryRunner: QueryRunner;

    constructor(private connection: Connection) {
        console.log('new request')
        this.queryRunner = this.connection.createQueryRunner();
    }

    getTransactionManager(): EntityManager | null {
        return this.transactionManager || this.queryRunner.manager;
    }

    getQueryRunner(): QueryRunner {
        return this.queryRunner;
    }

    getConnection(): Connection {
        return this.connection;
    }

    async withTransaction<T>(work: () => T): Promise<T> {
        await this.queryRunner.startTransaction();
        this.transactionManager = this.queryRunner.manager;
        try {
            const result = await work();
            await this.queryRunner.commitTransaction();
            console.log('transactions');
            return result;
        } catch (error) {
            await this.queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await this.queryRunner.release();
            this.transactionManager = null;
        }
    }
}