interface User {
    name: string;
    id: number;
}

class UserAccount{
    name: string;
    id: number;
    constructor(name: string, id:number){
        this.name = name;
        this.id = id;
    }
}
const choi : User = new UserAccount('me', 2);
console.log(choi);