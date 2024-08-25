"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
export default function ButtonsProvider() {
  
  const session = useSession();

  function onLogin(provider) {
    signIn(provider);
  }

  return (
    <div className={`flex flex-col space-y-4`}>
      <Button className={`text-xl flex gap-x-3`} onClick={()=>onLogin('github')}>
        <FaGithub /> Se connecter avec Github
      </Button>
      <Button className={`text-xl flex gap-x-3`} onClick={()=>onLogin('google')}>
        <FaGoogle /> Se connecter avec Google
      </Button>
    </div>
  );
}
