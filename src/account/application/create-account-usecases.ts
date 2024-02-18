import { Account } from "../domain/entities/account.entity";
import { RepositoryAccount } from "../domain/repository-contract/account.repository";

export class createAccount {
    constructor(private readonly repositoryAccount: RepositoryAccount) {}

    async execute(input: Input): Promise<Output>{
        const result = Account.createEntity(input.name, input.email, input.cpf)
        await this.repositoryAccount.insert(input)
        return result
    }
}

type Input = {
    name: string,
    email: string,
    password: string,
    cpf: string   
}

type Output = {
    name: string,
    email: string 
}