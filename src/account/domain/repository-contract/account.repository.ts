
import { Account } from "../entities/account.entity";

export interface RepositoryAccount {
    insert (data: Account);
}