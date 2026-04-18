//// Simple JS CQRS Example
/// Without CQRS

class UserService {
  constructor() {
    this.users = [];
  }

  createUser(user) {
    this.users.push(user);
  }

  getUser(id) {
    return this.users.find(u => u.id === id);
  }
}

// This mixes read and write.

// With CQRS


// Command Side
class CreateUserCommand {
  constructor(writeRepo) {
    this.writeRepo = writeRepo;
  }

  execute(user) {
    this.writeRepo.save(user);
  }
}

// Query Side
class GetUserQuery {
  constructor(readRepo) {
    this.readRepo = readRepo;
  }

  execute(id) {
    return this.readRepo.findById(id);
  }
}

// Repositories
class WriteRepo {
  constructor() {
    this.users = [];
  }

  save(user) {
    this.users.push(user);
  }
}

class ReadRepo {
  constructor(writeRepo) {
    this.writeRepo = writeRepo;
  }

  findById(id) {
    return this.writeRepo.users.find(u => u.id === id);
  }
}

const writeRepo = new WriteRepo();
const readRepo = new ReadRepo(writeRepo);

const createUser = new CreateUserCommand(writeRepo);
const getUser = new GetUserQuery(readRepo);

createUser.execute({ id: 1, name: "Nawin" });

console.log(getUser.execute(1));



