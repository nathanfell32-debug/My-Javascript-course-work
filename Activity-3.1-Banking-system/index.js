import BankAccount from "./bankAccount.js";  //Importing the BankAccount class, giving me access to the blueprint i created

const account1 = new BankAccount(12345, "Nathan Fell", 100);   //create a new bank account using the blueprint

const account2 = new BankAccount(6789, "John Smith", 500);   //created a second account for testing

account1.deposit(50);  // test depositing money into account.   //expected: balance increases to 150

account1.withdraw(20);  //test withdrawing money into account. //expected: balance decreases to 130

account1.checkBalance();  //check the current balance of account  //expected: "current balance: £130"

account1.deposit(100); //test depositing money into account2 // expected: balance increase £600

account2.withdraw(100);  //test withdrawing money from account2  //expected: balance decreases to 500

account2.checkBalance();  //check the current balance of account2 //expected: "current balance: £500"