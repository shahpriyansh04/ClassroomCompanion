import Head from "next/head";
import { signIn, getSession, signOut } from "next-auth/client";
export default function Home({ session }) {
  console.log(session);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {" "}
      {session && (
        <div>
          <p>Signed in as {session.user.email}</p>
          <p>Name {session.user.name}</p>
          <img src={session.user.image} alt={session.user.name} />
        </div>
      )}{" "}
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
