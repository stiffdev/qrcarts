/*import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});


export const { handlers: { GET, POST }, auth, signIn, signOut, update } = NextAuth({
    ...authConfig,
    providers: [
      // **************************************************************
      // added provider
      google({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      }),
      // **************************************************************
      Credentials({
        async authorize(credentials) {
          if (credentials.id && credentials.password) {
            // Add you backend code here
            // let loginRes = await backendLogin(credentials.id, credentials.password)
            let loginRes = {
              success : true,
              data : {
                user: {
                  ID: "john_doe",
                  NAME: "John Doe",
                  EMAIL: "email@email.email",
                },
              }
            }
            // Failed logging in
            if (!loginRes.success) return null;
            // Successful log in
            const user = {
              id: loginRes.data.user.ID ?? '',
              name: loginRes.data.user.NAME ?? '',
              email: loginRes.data.user.EMAIL ?? '',
            } as User;
            return user;
          }
          return null;
        },
      })
    ],
    callbacks: {
      async session({ session, token, user }) {
        session.user = token.user as User
        return session;
      },
      async jwt({ token, user, trigger, session }) {
        if (user) {
          token.user = user;
        }
        // ***************************************************************
        // added code
        if (trigger === "update" && session) {
          token = {...token, user : session}
          return token;
        };
         // **************************************************************
        return token;
      },
    },
  });*/

  //import { prisma } from '@/lib/prisma'
  import { session } from '@/lib/session'
  import { options } from './options'
  import NextAuth from 'next-auth/next'
  import { User } from "./models";
  import GoogleProvider from 'next-auth/providers/google'
  
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  
  const authOptions = {
    session: {
      strategy: 'jwt',
    },
    providers: [
      GoogleProvider({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async signIn({ account, profile }) {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      

       /* if (!profile?.email) {
          throw new Error('No profile');
        }
  
        await prisma.user.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email: profile.email,
            name: profile.name,
          },
          update: {
            name: profile.name,
          },
        });*/
        return true;
      },
      session: session,
      async jwt({ token, user, account, profile }) {
        if (profile) {
          connectToDb();
          const existingUser = await User.findOne({ email: profile.email });
         /* const existingUser = await prisma.user.findUnique({
            where: {
              email: profile.email,
            },
          });*/
          if (!existingUser) {
            throw new Error('No user found');
          }
          token.id = existingUser.id;
        }
        return token;
      },
    },
  };
  
  const handler = NextAuth(authOptions);
  module.exports = { handler: handler };
  