'use client';

import { Session } from "@auth0/nextjs-auth0";
import PostCreator from "../components/posts/creator";

interface Props {
  session: Session;
};

const CreatePosts = ({ session }: Props) => {
  return (
    <section className="mt-4">
      <PostCreator session={ session } />
    </section>
  );
}

export default CreatePosts;