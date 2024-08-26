import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { updateUser, getUser } from "@/lib/actionsUser";
import { toast } from "sonner";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { getNote, updateNote } from "@/lib/actionsNotes";


 export default async function Note({params}) {
const note = await getNote(params.id)


return (
  <Card>
  <form action={updateNote}>
    <Input type="hidden" name="id" defaultValue={note?.id}/>
    <CardHeader>
      <CardTitle>Nouvelle note</CardTitle>
      <CardDescription>Quelques mots pour ne pas oublier</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="title">Titre</Label>
        <Input placeholder="Titre de votre note" required type="text" name="title" id="title" defaultValue={note?.title}/>
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea placeholder="Description de votre note" required name="description" id="description" defaultValue={note?.description}/>
      </div>

      <div className="flex flex-col gap-y-2">
        <Label htmlFor="completed">En attente | Complet</Label>
        <Input defaultChecked={note?.completed} className="w-6 cursor-pointer accent-orange-500"  type="checkbox" name="completed" id="completed" />
      </div>
    </CardContent>
    <CardFooter className="flex items-center justify-between">
      <Button type="button" className="mx-1 my-2 text-white bg-red-500 hover:bg-red-600">
        <Link href="/dashboard/notes">Annuler</Link>
      </Button>
      
      <Button typeSubmit="submit" className="mx-1 my-2 text-black bg-primary hover:text-primary hover:bg-primary-foreground">Modifier la note</Button>

    </CardFooter>
  </form>
</Card>

  );

}