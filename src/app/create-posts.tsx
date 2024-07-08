'use client';

import PostCreator from "../components/posts/creator";

interface Props { };

const CreatePosts = (_: Props) => {

  return (
    <section className="mt-4">
      <PostCreator />
    </section>
  );
}

export default CreatePosts;