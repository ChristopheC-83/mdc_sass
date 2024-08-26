import { Button } from "@/components/ui/button";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Notes() {
  return (
    <section className="grid items-start gay-y-8">
      <div className="flex md:items-center md:justify-between max-md:flex-col">
        <div className="grid gap-1">
          <h2 className="text-3xl font-black uppercase">Notes</h2>
          <p className="text-lg text-muted-foreground">Notre bloc d'idées ! Don't forget anything !</p>
          <div className="w-12 h-[1px] mx-1 my-2 bg-white"></div>
        </div>
        <Button><Link  href="/dashboard/notes/create">Créez une Note</Link></Button>
      </div>
    </section>
  );
}
