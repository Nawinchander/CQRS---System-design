// Like Instagram / Facebook

// Commands:
// Create Post
// Like Post
// Queries:
// Get Feed
// Get Likes Count

/// command line

class CreatePostCommand {
  constructor(postRepo) {
    this.postRepo = postRepo;
  }

  execute(post) {
    this.postRepo.save(post);
  }
}

//// Query Side

class GetFeedQuery {
  constructor(postRepo) {
    this.postRepo = postRepo;
  }

  execute(userId) {
    return this.postRepo.getFeed(userId);
  }
}


/// Repo

class PostRepo {
  constructor() {
    this.posts = [];
  }

  save(post) {
    this.posts.push(post);
  }

  getFeed(userId) {
    return this.posts.filter(p => p.userId === userId);
  }
}

const repo = new PostRepo();

const createPost = new CreatePostCommand(repo);
const getFeed = new GetFeedQuery(repo);

createPost.execute({ id: 1, userId: 100, content: "Hello CQRS" });

console.log(getFeed.execute(100));




