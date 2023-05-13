export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name:string, accountNumber: number, balance: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = balance
    }

    Setname = (name:string): void => {
        this.name = name
        console.log('Nome alterado com sucesso');
    }

    getName = (): string => {
        return this.name
    }

    deposit = (balance: number): any => {
        if(this.validateStatus()){
            this.balance = balance
            return balance           
        }
    }

    withdraw = (sold: number): void =>{
        if(this.validateStatus() && sold <= this.getBalance()  ){
            console.log('Você sacou');
        } else {
            throw new Error('Saldo insufisiente')
        }

    }

    getBalance = (): number =>{
        return this.balance
        
    }

     validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }
    
        throw new Error('Conta invalida!')
    }
}