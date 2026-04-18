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

