import { DioAccount } from "./Dioaccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number, balance: number){
        super(name, accountNumber , balance)
    }

    getLoan = (sold:number): any => {
        if(this.validateStatus()){
             const saldo = sold + this.balance
             return `Você pegou um emprestimo ${saldo}`
        }
        
    }

    deposit = (): void => {
        console.log('A empresa depositou!');
        
    }


}