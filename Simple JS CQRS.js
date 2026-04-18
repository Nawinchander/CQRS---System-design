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


