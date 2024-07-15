import { getAllPosts } from "../services/post";
import { getUserSession } from "../services/session";

import Header from "./header";
import PostsList from "./post-list";

import PostCreator from "../components/posts/creator";
import PostsPageProvider from "../context/posts-provider";

const Page = async () => {
  const {
    userData,
    session,
  } = await getUserSession();

  const posts = await getAllPosts({ userId: userData.id });
 
  return (
    <PostsPageProvider
      posts={ posts }
      session={ session }
      userData={ userData }
    >
      <div className="min-h-screen bg-slate-100 min-w-full">
        <Header />
        <div className="mx-auto max-w-[400px]">
          <h1 className="pt-4 font-semibold text-slate-700 text-2xl text-center font-inter">Testing server actions</h1>
              <section className="mt-4">
          <PostCreator />
        </section>
          <PostsList />
        </div>
      </div>
    </PostsPageProvider>
  );
}

export default Page;
