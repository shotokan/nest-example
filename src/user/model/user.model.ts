export class User {
    readonly id: string;
    readonly name: string;
    readonly username: string;
    
    constructor(name: string, username: string) {
        this.name = name;
        this.username = username;
    }
}
