import { Injectable, Scope } from "@nestjs/common";
import { getRepository, Repository, EntitySchema, ObjectType } from "typeorm";
import { RepositoryFactory } from "typeorm/repository/RepositoryFactory";
import { UnitOfWork } from "./unit-of-work.provider";

@Injectable({ scope: Scope.REQUEST })
export class TransactionalRepository {
  constructor(private uow: UnitOfWork) {}
  /**
   * Gets a repository bound to the current transaction manager
   * or defaults to the current connection's call to getRepository().
   */
  getRepository<Entity>(
    target: ObjectType<Entity> | EntitySchema<Entity> | string
  ): Repository<Entity> {
    const transactionManager = this.uow.getTransactionManager();
    if (transactionManager) {
      const connection = this.uow.getConnection();
      const metadata = connection.getMetadata(target);
      return new RepositoryFactory().create(transactionManager, metadata);
    }
    return getRepository(target);
  }
}