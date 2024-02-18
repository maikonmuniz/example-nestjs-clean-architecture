import * as bcrypt from 'bcrypt';
import { Encrypter } from 'src/data/protocols/encrypt';

export class BcryptAdapter implements Encrypter {

    async encrypt(value: string): Promise<string> {
        const hash = await bcrypt.hash(value, 12)
        return hash
    }
}