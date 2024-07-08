'use client'

import { Post } from "../types";
import PostCard from "../components/posts/card";
import { Session } from "@auth0/nextjs-auth0";

interface Props {
  posts: Array<Post>;
  session: Session;
};

const PostsList = (props: Props) => {
  const {
    posts,
    session,
  } = props;

  return (
    <div className="mt-4 border px-3 py-2 flex flex-col gap-3 rounded-md border-slate-200 bg-white with-list-div">
      { posts.map(p =>
        <PostCard
          key={ p.id }
          data={ p }
          session={ session }
        />
      ) }
    </div>
  );
}

export default PostsList;
