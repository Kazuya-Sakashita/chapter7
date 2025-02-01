import Navbar from "./Navbar";
import { WithChildren } from "../../types/commonTypes";
import PostCard from "./PostCard";
import { posts } from "../../data/posts";

const Layout: React.FC<WithChildren> = ({ children }) => {
  return (
    <>
      {/* ナビゲーションバー */}
      <Navbar />

      {/* 投稿一覧 */}
      <main className="container mx-auto p-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </>
  );
};

export default Layout;
