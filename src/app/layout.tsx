import { PropsWithChildren } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

import './main.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={ inter.variable } >
       <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  )
}
