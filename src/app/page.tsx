import { getSession } from "@auth0/nextjs-auth0";
import ProfileClient from "../components/profile";
import { getAllPosts } from "../services/post";
import CreatePosts from "./create-posts";
import { getUserIdFromSession } from "../helpers/session";

const Page = async () => {
  const session = await getSession();

  if (!session) return (
    <a className="px-2 py-1 rounded-lg bg-blue-500 bg-blend-darken text-white" href="/api/auth/login">Login</a>
  );

  const posts = await getAllPosts({ userId: getUserIdFromSession(session) });
  const plainSession = { ...session };

  return (
    <div className="min-h-screen bg-slate-100 min-w-full">
      <div className="mx-auto max-w-[400px]">
        <h1 className="font-semibold text-slate-700 text-2xl text-center">Testing server actions</h1>
        <CreatePosts
          posts={ posts }
          session={ plainSession }
        />
        <section className="mt-3">
          <ProfileClient
            session={ plainSession }
          />
        </section>
      </div>
    </div>
  );
}

export default Page;
