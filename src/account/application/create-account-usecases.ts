import { Account } from "../domain/entities/account.entity";
import { RepositoryAccount } from "../domain/repository-contract/account.repository";
import { Encrypter } from "src/data/protocols/encrypt";
export class CreateAccount {
    constructor(private readonly repositoryAccount: RepositoryAccount, private readonly bcryptAdapter: Encrypter) {}

    async execute(input: Input): Promise<Output>{
        const password = await this.bcryptAdapter.encrypt(input.password)
        const result = Account.createEntity(input.name, input.email, password, input.cpf)
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