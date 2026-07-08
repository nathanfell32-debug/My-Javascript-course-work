class bankAccount {   //This class is a blueprint for creating bank accounts
    constructor(accountNumber, accountHolder, balance) {   //The constructor runs when a new bankAccount is created
    this.accountNumber = accountNumber;   //stores the account number
    this.accountHolder = accountHolder;   //stores the account holder's name
    this.balance = balance;              //stores the starting balance
}

deposit(amount) {   //method to add money to the account
    this.balance += amount;   //increase balance by deposit amount
    console.log(`Deposited £${amount}. New balance: £${this.balance}`);
}

withdraw(amount) {    //method to withdraw money from the account
    if (amount > this.balance) {    //check if the account has enough money
        console.log("insufficient funds.");    //prevents balance going negative
     } else {
            this.balance -= amount;    //subtract the withdrawal amount
            console.log(`Withdrew £${amount}. New balance: £${this.balance}`);
        }
    }


checkBalance() {     //method to check the current balance
    console.log(`Current balance: £${this.balance}`);    //shows the balance
   }
}

export default bankAccount;    //export the class so index.js can import it