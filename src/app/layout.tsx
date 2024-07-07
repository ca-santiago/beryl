import { PropsWithChildren } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import './main.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
       <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  )
}
