import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
 2 |  
 3 | export const authConfig = {
 4 |   pages: {
 5 |     signIn: '/login',
 6 |   },
 7 |   callbacks: {
 8 |     authorized({ auth, request: { nextUrl } }) {
 9 |       const isLoggedIn = !!auth?.user;
10 |       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
11 |       if (isOnDashboard) {
12 |         if (isLoggedIn) return true;
13 |         return false; // Redirect unauthenticated users to login page
14 |       } else if (isLoggedIn) {
15 |         return Response.redirect(new URL('/dashboard', nextUrl));
16 |       }
17 |       return true;
18 |     },
19 |   },
20 |   providers: [Credentials], // Add providers with an empty array for now
21 | } satisfies NextAuthConfig;