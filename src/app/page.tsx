import { AppContextProvider } from "../context";
import { AuthInfo } from "../types";

import { getAllPosts } from "../services/post";

import CreatePosts from "./create-posts";
import Header from "./header";
import PostsList from "./post-list";
import { getUserSession } from "../services/session";

const Page = async () => {
  const {
    userData,
    session,
  } = await getUserSession();

  const posts = await getAllPosts({ userId: userData.id });
 
  const plainSession = { ...session };

  const authInfo: AuthInfo = { session: plainSession, userData };

  return (
    <AppContextProvider
      auth={authInfo}
      posts={posts}
    >
      <div className="min-h-screen bg-slate-100 min-w-full">
        <Header />
        <div className="mx-auto max-w-[400px]">
          <h1 className="pt-4 font-semibold text-slate-700 text-2xl text-center font-inter">Testing server actions</h1>
          <CreatePosts />
          <PostsList />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default Page;
