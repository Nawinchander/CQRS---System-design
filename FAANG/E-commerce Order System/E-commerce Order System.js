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


class GetOrderHistoryQuery {
  constructor(orderReadRepo) {
    this.orderReadRepo = orderReadRepo;
  }

  execute(userId) {
    return this.orderReadRepo.findByUser(userId);
  }
}


//// Repository

class OrderRepo {
  constructor() {
    this.orders = [];
  }

  save(order) {
    this.orders.push(order);
  }

  findByUser(userId) {
    return this.orders.filter(o => o.userId === userId);
  }
}

const repo = new OrderRepo();

const placeOrder = new PlaceOrderCommand(repo);
const getHistory = new GetOrderHistoryQuery(repo);

placeOrder.execute({ id: 1, userId: 101, item: "Laptop" });
placeOrder.execute({ id: 2, userId: 101, item: "Phone" });

console.log(getHistory.execute(101));






