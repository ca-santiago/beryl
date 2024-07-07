'use client';

import { Session } from "@auth0/nextjs-auth0";
import PostCard from "../components/posts/card";
import PostCreator from "../components/posts/creator";

interface Props {
  posts: Array<any>;
  session: Session;
};

const CreatePosts = ({ posts, session }: Props) => {
  return (
    <section className="mt-10">
      <PostCreator session={ session } />
      <div className="mt-2 border border-slate-100 px-3 py-2 flex flex-col gap-3 rounded bg-white with-list-div">
        {posts.map(p =>
          <PostCard
            key={ p.id }
            data={ p }
            session={ session }
          />
        )}
      </div>
    </section>
  );
}

export default CreatePosts;