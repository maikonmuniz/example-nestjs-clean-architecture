export class Account {
    name: string;
    email: string;
    cpf: any;
    password: string;

    private constructor(name: string, email: string, password: string, cpf: string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
    }

    static createEntity (name: string, email: string, password: string, cpf: string) {
        return new Account(name, email, password, cpf);
    }
}
