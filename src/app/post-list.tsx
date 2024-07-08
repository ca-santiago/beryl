'use client'

import { Post, User } from "../types";
import PostCard from "../components/posts/card";

interface Props {
  posts: Array<Post>;
  userData: User;
};

const PostsList = (props: Props) => {
  const {
    posts,
    userData,
  } = props;

  return (
    <div className="mt-4 border px-3 py-2 flex flex-col gap-3 rounded-md border-slate-200 bg-white with-list-div">
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
