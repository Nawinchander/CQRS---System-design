// Like PayPal / Stripe

// Writes need consistency; reads need speed.


/// Command Side

class TransferMoneyCommand {
  constructor(accountRepo) {
    this.accountRepo = accountRepo;
  }

  execute(from, to, amount) {
    this.accountRepo.transfer(from, to, amount);
  }
}

/// Query line

class GetBalanceQuery {
  constructor(accountRepo) {
    this.accountRepo = accountRepo;
  }

  execute(accountId) {
    return this.accountRepo.getBalance(accountId);
  }
}


//// Repo

class AccountRepo {
  constructor() {
    this.accounts = {
      A: 1000,
      B: 500
    };
  }

  transfer(from, to, amount) {
    this.accounts[from] -= amount;
    this.accounts[to] += amount;
  }

  getBalance(accountId) {
    return this.accounts[accountId];
  }
}

const repo = new AccountRepo();

const transfer = new TransferMoneyCommand(repo);
const getBalance = new GetBalanceQuery(repo);

transfer.execute("A", "B", 200);

console.log(getBalance.execute("A"));
console.log(getBalance.execute("B"));


