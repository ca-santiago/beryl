'use client';

import PostCreator from "../components/posts/creator";
import { User } from "@prisma/client";

interface Props {
  userData: User;
};

const CreatePosts = (props: Props) => {
  const {
    userData,
  } = props;

  return (
    <section className="mt-4">
      <PostCreator userData={ userData } />
    </section>
  );
}

export default CreatePosts;