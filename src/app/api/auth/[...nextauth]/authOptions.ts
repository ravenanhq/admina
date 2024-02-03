// Import necessary types and the CredentialsProvider from next-auth/providers/credentials
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define the authentication options using NextAuthOptions
export const authOptions: NextAuthOptions = {
  // Configure session strategy
  session: {
    strategy: "jwt",
  },

  // Define authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials", // Set the type to "credentials"
      credentials: {}, // You can define additional options for credentials
      async authorize(credentials) {
        // Extract username and password from provided credentials
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // Example: Check if the username is 'demo' and password exists
        if (username === 'demo' && password === 'demo') {
          console.log('if');
          // Return true if authentication is successful
          return Promise.resolve(true);
        } else {
          console.log('else');
          // Return false if authentication fails
          return Promise.resolve(false);
        }
      },
    }),
  ],

  // Define custom pages, in this case, the sign-in page
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
};
