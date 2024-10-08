"use client"

import * as React from "react"
import {  LogOut, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const router = useRouter()

  const { data: session, status } = useSession();
  function logOut(){
    signOut();
    toast.success("Vous êtes déconnecté !")
  }

  return (
    <div className="flex gap-3">
      {session && <Button variant="outline" size="icon" onClick={logOut}><LogOut/></Button>}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          {/* <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
