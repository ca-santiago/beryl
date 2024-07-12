import { Session } from "@auth0/nextjs-auth0";

export const getAuth0UserId = (session: Session): string => {
  return session.user['sub'];
}
