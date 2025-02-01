import Navbar from "../components/components/Navbar";
import PostCard from "../components/components/PostCard";
import { posts } from "../data/posts";
import { Post } from "../types/postTypes";

const PostList = () => {
  return (
    <div>
      {/* ナビゲーションバーを表示 */}
      <Navbar />

      {/* 投稿一覧 */}
      <main className="container mx-auto p-4">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default PostList;
