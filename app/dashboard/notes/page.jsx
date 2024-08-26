import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllNotes } from "@/lib/actionsNotes";
import { getUser } from "@/lib/actionsUser";
import { File, FilePenLine } from "lucide-react";
import ButtonDeleteNote from "@/app/components/ButtonDeleteNote";
import { Card } from "@/components/ui/card";
/* eslint-disable react/no-unescaped-entities */
export default async function Notes() {
  const user = await getUser();
  const data = await getAllNotes(user?.id);
  console.log(data);

  return (
    <section className="grid items-start gay-y-8">
      <div className="flex md:items-center md:justify-between max-md:flex-col">
        <div className="grid gap-1">
          <h2 className="text-3xl font-black uppercase">Notes</h2>
          <p className="text-lg text-muted-foreground">
            Notre bloc d'idées ! Don't forget anything !
          </p>
          <div className="w-12 h-[1px] mx-1 my-2 bg-white"></div>
        </div>
        <Button>
          <Link href="/dashboard/notes/create">Créer une Note</Link>
        </Button>
      </div>

      {data.length < 1 ? (
        <div
          className={`flex min-h-96 flex-col items-center justify-center border border-dashed p-3`}
        >
          <p>Il n'y a pas de note pour le moment</p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {data?.map((note) => (
            <Card
              key={note?.id}
              className={` flex items-center justify-between p-4`}
            >
              <div>
                <h2 className="text-primary">{note?.title}</h2>
                <br />
                <p className="text-sm text-muted-foreground">
                  écrit le{" "}
                  {new Intl.DateTimeFormat("fr-FR", {
                    dateStyle: "full",
                  }).format(new Date(note?.createdAt))}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  className={`bg-yellow-500 hover:bg-yellow-600 mt-4 text-white mb-3`}
                >
                  <Link href={`notes/note/${note?.id}`}>
                    <FilePenLine className={`w-4`} />
                  </Link>
                </Button>
                <ButtonDeleteNote id={note?.id} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
