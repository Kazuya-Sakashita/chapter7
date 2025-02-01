import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import { Post } from "../types/postTypes";

const PostList = () => {
  return (
    <div>
      <main className="container mx-auto p-4">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default PostList;
