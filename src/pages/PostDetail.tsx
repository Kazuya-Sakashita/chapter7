import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import React from "react";
import { Post } from "../types/postTypes";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // useParams が { id: "1" }、これを分割代入で id だけ取り出す
  const post: Post | undefined = posts.find((p: Post) => p.id === Number(id)); // ID から記事を検索

  if (!post) {
    return <p>記事が見つかりません。</p>; // 該当記事がない場合の表示
  }

  return (
    <div className="container mx-auto p-4">
      {/* サムネイル画像 */}
      <img src={post.thumbnailUrl} alt={post.title} className="w-full h-auto" />

      {/* 本文(Cardを利用) */}
      <div className="container mx-auto p-4">
        <PostCard post={post} isDetail={true} />
      </div>
    </div>
  );
};

export default PostDetail;
