import React from "react";
import { Post } from "../types/postTypes";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: Post;
  isDetail?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, isDetail }) => {
  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  // カード内容（共通部分）
  const content = (
    <>
      {/* 上部のレイアウト: 日付を左側、カテゴリを右側に表示 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-gray-500">{formatDate(post.createdAt)}</p>
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="text-sm text-blue-700 px-2 py-1 rounded border border-blue-700"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* タイトル */}
      <h2 className="text-2xl mt-4 mb-2 truncate text-left">{post.title}</h2>

      {/* 内容 */}
      <p className={`text-gray-600 mt-2 ${isDetail ? "" : "line-clamp-2"}`}>
        {post.content}
      </p>
    </>
  );

  return (
    <div className={`bg-white ${isDetail ? "" : " p-4 border mt-8"}`}>
      {isDetail ? (
        <div>{content}</div>
      ) : (
        <Link to={`/posts/${post.id}`} className="block">
          {content}
        </Link>
      )}
    </div>
  );
};

export default PostCard;
