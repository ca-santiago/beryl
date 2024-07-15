'use client'

import PostCard from "../components/posts/card";
import { useAppSelector } from "../context/store";

interface Props { };

const PostsList = (_: Props) => {
  const posts = useAppSelector(s => s.posts.collection);
  const userData = useAppSelector(s => s.session.userData);

  if (posts.length < 1) return null;

  return (
    <div className="mt-4 border p-2 flex flex-col gap-3 rounded-md border-slate-200 bg-white with-list-div">
      { posts.map(p =>
        <PostCard
          key={ p.id }
          data={ p }
          userData={ userData }
        />
      ) }
    </div>
  );
}

export default PostsList;
