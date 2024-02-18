import { Account } from "src/account/domain/entities/account.entity";
import { RepositoryAccount } from "src/account/domain/repository-contract/account.repository";

export class inMemery implements RepositoryAccount {
    account: any[];

    constructor () {
        this.account = []
    }

    async insert(data: Account) {
        this.account.push(data);
    }

}