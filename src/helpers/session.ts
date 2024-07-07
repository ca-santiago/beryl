import { Session } from "@auth0/nextjs-auth0";

export const getUserIdFromSession = (session: Session): string => {
  return session.user['sub'];
}
