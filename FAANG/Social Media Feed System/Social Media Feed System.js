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


