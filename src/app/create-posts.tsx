'use client';

import PostCreator from "../components/posts/creator";
import { useAppContext } from "../context";

interface Props { };

const CreatePosts = (props: Props) => {

  return (
    <section className="mt-4">
      <PostCreator />
    </section>
  );
}

export default CreatePosts;