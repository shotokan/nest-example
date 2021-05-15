import { Module, Global } from "@nestjs/common";
import { UnitOfWork } from "./unit-of-work.provider";
import { TransactionalRepository } from "./transactional.repository";

@Global()
@Module({
  providers: [UnitOfWork, TransactionalRepository],
  exports: [UnitOfWork, TransactionalRepository],
})
export class UnitOfWorkModule {}
