class Account {
    constructor(iaccountNumber, iname, itype) {
        this.accountNumber = iaccountNumber
        this.name = iname
        this.balance = ibalance
        this.type = itype
        this.balance = 0;
        this.transaction = [];

        let coltonAccount = new Account(1234, 'coltAccount', 'checking');
        let jackAccount = new Account(5678, 'jackAccount', 'savings');
        console.log("acc1 info = ", coltonAccount.info());

        jackAccount.updateBalance(10);
        jackAccount.updateBalance(50);
        jackAccount.updateBalance(-12);




    }
    info() {
        let description = "this Account number is = " + this.accountNumber;
        description += "Balance = " + this.balance;
        description += "Type =" + this.type;
        return description;


    }

    updateBalance(description, amount) {
        let newTrans = new Transaction(description, amount);
        this.transaction.push(newTrans)
        this.balance = this.balance + amount;

    }



}

class Transaction {
    constructor(idescription, iamount) {
        this.amount = iamount
        this.description = idescription


    }

    
}




