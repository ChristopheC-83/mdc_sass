"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { ThemeToggle } from "./ThemeToggle";

export default function Nav() {
  return (
    <div className="w-full border-b border-gray-300">
      <nav
        className={`max-w-[1200px] mx-auto w-full h-20 flex items-center justify-between p-5`}
      >
        <div>
          <Link href="/">
            <Image
              width={50}
              height={50}
              src={logo}
              alt="earth"
              className={`w-12 h-12`}
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
