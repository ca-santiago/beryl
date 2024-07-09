'use client'

import PostCard from "../components/posts/card";
import { useAppContext } from "../context";

interface Props { };

const PostsList = (_: Props) => {
  const { posts, auth } = useAppContext();

  if (posts.collection.length < 1) return null;

  return (
    <div className="mt-4 border p-2 flex flex-col gap-3 rounded-md border-slate-200 bg-white with-list-div">
      { posts.collection.map(p =>
        <PostCard
          key={ p.id }
          data={ p }
          userData={ auth.userData }
        />
      ) }
    </div>
  );
}

export default PostsList;
