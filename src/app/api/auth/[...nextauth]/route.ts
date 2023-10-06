import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authoptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
