// app/api/auth/[...nextauth]/route.js
// Force the Node.js runtime so that libraries like oidc-token-hash work properly.
export const runtime = "nodejs";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID || "",
            clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
            profile(profile) {
                return {
                    id: profile.sub,
                    email: profile.email,
                    name: profile.name,
                    image: profile.picture,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const userEmail = user.email;
                if (userEmail === "akshay.22bce9221@vitapstudent.ac.in") {
                    token.role = "admin";
                    token.club = "test";
                } else {
                    token.role = "user";
                    token.club = null;
                }
            }
            return token;
        },

        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.club = token.club;
            }
            return session;
        },

        async redirect({ url, baseUrl }) {
            if (url === "/api/auth/signin" || url === baseUrl) {
                return `${baseUrl}/auth/role-bridge`;
            }
            return url;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
    session: {
        maxAge: 24 * 60 * 60, // 24 hours
    },
};

// Initialize NextAuth with the options.
const handler = NextAuth(authOptions);

// Export the NextAuth handler for both GET and POST requests.
export { handler as GET, handler as POST };
