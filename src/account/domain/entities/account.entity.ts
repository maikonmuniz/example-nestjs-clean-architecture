export class Account {
    name: string;
    email: string;
    cpf: any;

    private constructor (name: string, email: string, cpf: string){
        this.name = name;
        this.email = email;
        this.cpf = cpf;
    }

    static createEntity (name: string, email: string, cpf: string) {
        return new Account(name, email, cpf);
    }
}
