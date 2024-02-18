import { Account } from "../domain/entities/account.entity";
import { RepositoryAccount } from "../domain/repository-contract/account.repository";

export class createAccount {
    constructor(private readonly repositoryAccount: RepositoryAccount) {}

    async execute(input: Input){
        const result = Account.createEntity(input.name, input.email, input.cpf)
        await this.repositoryAccount.insert(input)
        return result
    }
}

type Input = {
    name: string,
    email: string,
    cpf: string    
}