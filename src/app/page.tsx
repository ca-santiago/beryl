import { getSession } from "@auth0/nextjs-auth0";
import MiniProfileInfo from "../components/profile";
import { getAllPosts } from "../services/post";
import CreatePosts from "./create-posts";
import { getUserIdFromSession } from "../helpers/session";
import PostsList from "./post-list";
import { UserService } from "../services/user";

const Page = async () => {
  const session = await getSession();

  if (!session) return (
    <a className="px-2 py-1 rounded-lg bg-blue-500 bg-blend-darken text-white" href="/api/auth/login">Login</a>
  );

  const auth0UserId = getUserIdFromSession(session);
  const userData = await UserService.getUserData(auth0UserId);

  const posts = await getAllPosts({ userId: userData.id });

  const plainSession = { ...session };

  return (
    <div className="min-h-screen bg-slate-100 min-w-full">
      <div className="mx-auto max-w-[400px]">
        <h1 className="pt-4 font-semibold text-slate-700 text-2xl text-center">Testing server actions</h1>
        <CreatePosts
          userData={ userData }
        />
        <PostsList
          posts={ posts } 
          userData={ userData }
        />
        <section className="mt-4">
          <MiniProfileInfo
            session={ plainSession }
          />
          <pre className="mt-4">
            { JSON.stringify(userData, null, 2) }
          </pre>
        </section>
      </div>
    </div>
  );
}

export default Page;
