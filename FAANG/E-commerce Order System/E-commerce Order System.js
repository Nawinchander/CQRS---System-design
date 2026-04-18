// At companies like Amazon:

// Order placement = write-heavy
// Order history = read-heavy

// CQRS helps separate these.

// Command Side

class PlaceOrderCommand {
  constructor(orderWriteRepo) {
    this.orderWriteRepo = orderWriteRepo;
  }

  execute(order) {
    this.orderWriteRepo.save(order);
    console.log("Order placed");
  }
}


/// Query Side






