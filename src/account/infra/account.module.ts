import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { CreateAccount } from '../application/create-account-usecases';
import { inMemery } from './repository/inMemory';
import { BcryptAdapter } from '../criptography/bcrypt-adapter';
import { RepositoryAccount } from '../domain/repository-contract/account.repository';
import { Encrypter } from 'src/data/protocols/encrypt';

@Module({
  controllers: [AccountController],
  providers: [
    {
      provide: 'AccountRepository',
      useClass: inMemery
    }, {
      provide: 'HashData',
      useClass: BcryptAdapter
    },
    {
      provide: CreateAccount,
      useFactory: (accountRepository: RepositoryAccount, hashData: Encrypter) => {
        return new CreateAccount(accountRepository, hashData)
      },
      inject: ['AccountRepository', 'HashData'],
  }],
})
export class AccountModule {}
