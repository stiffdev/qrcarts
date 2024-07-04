import { User, getServerSession } from 'next-auth'



const session = async ({ session, token }) => {
  session.user.id = token.id;
  return session;
};

const getUserSession = async () => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  });
  // if (!authUserSession) throw new Error('unauthorized');
  return authUserSession?.user;
};

module.exports = { session, getUserSession };
