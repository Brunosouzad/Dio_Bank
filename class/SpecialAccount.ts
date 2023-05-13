import { DioAccount } from "./Dioaccount";

export class SpecialAccount extends DioAccount {

    constructor(name: string , accountNumber: number, balance: number){
        super(name, accountNumber, balance)
    }
    SpecialLoot = (sold:number):any =>{
        return  `Saldo do deposito é: ${sold + 10}`
    }

}