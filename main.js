class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = []
    }
}

balance (){
    let sum = 0;
    for (let i = 0; i < this.transactions.length; i++){
        sum += this.transactions[i].amount;
    }
    return sum;
}

charge(payee,amt){
    let chargeTransaction = this.balance();
    if(amt<= currentBalance) {
        let chargeTransaction = new Transaction(-amt, payee);
        this.transactions.push(chargeTransaction);
    }
   

}

deposit(amt){
    if(amt > 0) {
        let depositTransaction = new Transaction(amt, "Deposit");
        this.transactions.push(depositTransaction);
        }
    }

class Transaction {

    constructor(amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}