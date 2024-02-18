import { Account } from "../domain/entities/account.entity";
import { RepositoryAccount } from "../domain/repository-contract/account.repository";
import { BcryptAdapter } from "../criptography/bcrypt-adapter";
export class createAccount {
    constructor(private readonly repositoryAccount: RepositoryAccount, private readonly bcryptAdapter: BcryptAdapter) {}

    async execute(input: Input): Promise<Output>{
        const password = this.bcryptAdapter.encrypt(input.password)
        const result = Account.createEntity(input.name, input.email, input.password, input.cpf)
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