import supabase from "./supabase";
const SignInWithGoogle = async () => {
  const { user, session, error } = await supabase.auth.signIn(
    {
      provider: "google",
    },
    { redirectTo: "http://localhost:3000/login" }
  );

  if (error) {
    return error;
  } else {
    const { data, error } = await supabase.from("users").insert([
      {
        user_id: user.id,
        email: user.email,
        name: user?.user_metadata?.full_name,
      },
    ]);
    console.log(data);
    console.log(error);
    // const { data, error } = await supabase.from("users").insert([
    //   {
    //     user_id: "4",
    //     name: "Priyans",
    //   },
    // ]);
    console.log(data);
    console.log(error);
    return user;
  }
};
const SignUpWithEmail = async (userdata) => {
  const { user, session, error } = await supabase.auth.signUp({
    email: userdata.email,
    password: userdata.password,
  });
  if (error) {
    return error;
  } else {
    const { data, error } = await supabase.from("users").insert([
      {
        user_id: user.id,
        email: user.email,
        name: userdata.name,
      },
    ]);
    console.log(data);
    console.log(error);
    return user;
  }
};
const SignInWithEmail = async (data) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: data.email,
    password: data.password,
  });
  if (error) {
    return error;
  } else {
    return user;
  }
};
export { SignInWithGoogle, SignUpWithEmail, SignInWithEmail };
