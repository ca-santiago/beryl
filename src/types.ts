import { Session } from '@auth0/nextjs-auth0';
import { Post, User } from '@prisma/client';

export type { Post, User } from '@prisma/client';

export interface AuthInfo {
  userData: User;
  session: Session;
}

export interface PostsInfo {
  collection: Array<Post>;
}

export interface RootAppContext {
  auth: AuthInfo;
  posts: PostsInfo;
}
