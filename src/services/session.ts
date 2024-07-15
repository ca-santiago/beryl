'use server'

import { getSession } from "@auth0/nextjs-auth0";
import { redirect, RedirectType } from "next/navigation";
import { UserService } from "./user";
import { getAuth0UserId } from "../helpers/session";

export const getUserSession = async () => {
  const session = await getSession();
  if (!session) return redirect('/api/auth/login', RedirectType.replace);

  const userId = getAuth0UserId(session);
  const userData = await UserService.getUserData(userId);
  if (!userData) return redirect('/api/auth/logout', RedirectType.replace);

  return {
    userData,
    session: { ...session },
  };
}
