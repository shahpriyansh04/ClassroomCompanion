import React from "react";
import Header from "../components/dashboard/Header";
import { useSupabase } from "use-supabase";
import { useRouter } from "next/router";

function dashboard() {
  const { auth } = useSupabase();

  const user = auth.currentUser;

  return (
    <div className="h-screen ">
      <Header />
    </div>
  );
}

export default dashboard;
