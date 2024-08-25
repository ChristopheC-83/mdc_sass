"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Typewriter, Cursor } from "react-simple-typewriter";
import ButtonsProvider from "./components/ButtonsProvider";
import { useSession } from "next-auth/react";
import {redirect} from "next/navigation"

export default function Home() {

  const { data: session } = useSession();
  console.log(session);

  if(session){
    redirect("/dashboard/notes");
  }
  
  return (
    <section className="flex flex-col items-center justify-center w-full gap-2 min-h-svh ">
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className={`mb-4 object-contain`}
      />
      <h1 className="flex items-center mb-2 text-4xl font-black uppercase md:6xl">
        <Typewriter
          typeSpeed={50}
          words={["Salutations", "Hello !", "Guten Tag", "Namaste"]}
          loop={0}
        />
        <span>
          <Cursor />
        </span>
      </h1>
      <p className="my-2 text-center">Projet en NextJS avec La Minute du Code !</p>
      <ButtonsProvider />
    </section>
  );
}
