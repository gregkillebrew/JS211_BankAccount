# JS211_BankAccount

Create a new JS211_BankAccount repo and clone it to your 211 project folder

cd into the project and open it in VS Code.

Create a new package.json file and install mocha. (Copy the test script command from another project.)

Your "scripts" section should look like this:

"scripts": {
    "test": "mocha --no-timeouts"
  }
One more step: In  your project folder in VS Code, create a .gitignore file.
Type node_modules in the file and save it (if you don't have Auto Save turned on. This prevents that folder from being uploaded to GitHub when you push your code.
BankAccount class - This class represents a bank account.

The class should have the following fields:

accountNumber - String representing the account number
owner - String representing the owner of the account
transactions - An array of transactions representing the history of all transactions associated with this account
The constructor should take in the following input:

accountNumber - The account Number
owner - The name of the person who owns this account
NOTE: When an account is created, you should initialize the transactions array to be an empty array

The class should have the following 3 methods:

balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.
deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
NOTE: You should not be able to deposit a negative amount

charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.
NOTE: You should not be able to charge an amount that would make your balance dip below 0

Transaction class - This class represents a single transaction in a bank account.

The class should have the following fields:

date - The date of the transaction
amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
payee - The description or payee on the transaction
The constructor should take in the following input:

amount - The amount on the transaction
payee - The payee or description on the transaction
NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date automatically.