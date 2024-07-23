import { Session } from '@auth0/nextjs-auth0';
import { Post, Product, User } from '@prisma/client';
import { PropsWithChildren } from 'react';

export type { Post, User } from '@prisma/client';

export interface PostsState {
  collection: Array<Post>;
}

export interface SessionState {
  userData: User;
  session: Session;
}

export interface SellerState {
  products: {
    collection: Array<Product>;
  };
}

export type ProviderPropsWithSession<T extends object> = PropsWithChildren<T & {
  session: Session;
  userData: User;
}>;
