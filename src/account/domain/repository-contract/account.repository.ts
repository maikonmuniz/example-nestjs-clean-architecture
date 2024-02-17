
import { Account } from "../entities/account.entity";

export interface repositoryAccount {
    insert (data: Account);
}